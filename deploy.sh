#!/bin/bash

# Set variables
PROJECT_ID="creativelandscapes"
REGION="europe-west2"
REPO_NAME="creative-spaces"
IMAGE_NAME="creative-spaces"
TAG="latest"
SERVICE_NAME="creative-spaces-service"  # Name of the Cloud Run service
MEMORY="512Mi"  # Memory allocation
CPU="1"         # CPU allocation
MIN_INSTANCES="1"  # Minimum number of instances
MAX_INSTANCES="3"  # Maximum number of instances





# Authenticate with Google Cloud
# echo "Authenticating with Google Cloud..."
# gcloud auth login
# gcloud config set project ${PROJECT_ID}
echo "Using existing gcloud credentials."



# Configure Docker to use gcloud credentials
echo "Configuring Docker to use gcloud credentials..."
gcloud auth configure-docker ${REGION}-docker.pkg.dev

# Check if repository exists
echo "Checking if the repository exists..."
if ! gcloud artifacts repositories describe ${REPO_NAME} --location=${REGION} >/dev/null 2>&1; then
  echo "Repository ${REPO_NAME} not found in region ${REGION}. Please create it before running this script."
  exit 1
else
  echo "Repository ${REPO_NAME} found in region ${REGION}."
fi

# Build Docker image
echo "Building Docker image..."
docker build -t ${IMAGE_NAME}:${TAG} .

# Tag Docker image
echo "Tagging Docker image..."
docker tag ${IMAGE_NAME}:${TAG} ${REGION}-docker.pkg.dev/${PROJECT_ID}/${REPO_NAME}/${IMAGE_NAME}:${TAG}

# Push Docker image to Google Cloud Artifact Registry
echo "Pushing Docker image to Google Cloud Artifact Registry..."
docker push ${REGION}-docker.pkg.dev/${PROJECT_ID}/${REPO_NAME}/${IMAGE_NAME}:${TAG}
echo "Docker image successfully pushed to Google Cloud Artifact Registry."

# Deploy to Cloud Run with specified memory, CPU, and scaling parameters
echo "Deploying to Cloud Run..."
gcloud run deploy ${SERVICE_NAME} \
  --image=${REGION}-docker.pkg.dev/${PROJECT_ID}/${REPO_NAME}/${IMAGE_NAME}:${TAG} \
  --platform=managed \
  --region=${REGION} \
  --memory=${MEMORY} \
  --cpu=${CPU} \
  --min-instances=${MIN_INSTANCES} \
  --max-instances=${MAX_INSTANCES} \
  --allow-unauthenticated \

# Provide feedback on script completion
echo "Cloud Run deployment completed."
