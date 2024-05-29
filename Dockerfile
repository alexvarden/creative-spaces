# Use the official Node.js image from the Docker Hub
FROM node:14

# Set the working directory
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install the dependencies
RUN npm install 

# Copy the rest of the application code
COPY . .

# Ensure any scripts are executable
RUN chmod +x /usr/src/app/docker-entrypoint.sh

# Expose port 8080
EXPOSE 8080


ENTRYPOINT [ "/usr/src/app/docker-entrypoint.sh" ]