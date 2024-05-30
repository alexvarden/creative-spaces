const express = require('express');
const {globSync} = require('glob');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0'; // Listen on all network interfaces

function getImagesInDirectory(directory) {
    const imagesDir = path.join(__dirname, 'public/images/' + directory);
    const images = globSync(`${imagesDir}/*`).map(image => {
        return '/images/' + directory + '/' + path.basename(image);
    });
    return images;
}




app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/services', (req, res) => {
    res.render('services');
});

app.get('/services/landscaping', (req, res) => {
    res.render('services/default', { 
        title: 'Landscaping',
        features:[
            "<strong> Materials:</strong> Natural stone, gravel, porcelain, clay pavers, artificial turf.",
            "<strong> Styles:</strong> Contemporary, traditional, Japanese, Mediterranean, cottage.",
            "<strong> Features:</strong> Water features, rockery gardens, raised beds, retaining walls.",
        ], 
        content:`
            <p class="my-4">Transform your outdoor space into a beautiful, functional paradise with our expert landscaping services. We specialise in creating stunning garden designs that not only enhance the aesthetics of your property but also add value to your home.</p>
            <p>Our team of experienced landscapers will work with you to develop a custom plan that suits your taste and lifestyle. From lush lawns to vibrant flower beds, serene water features to sophisticated lighting, we ensure every element is perfectly in place to create your dream garden. Trust us to turn your outdoor vision into reality, providing a tranquil escape right in your back garden.</p>
        `, 
        images: getImagesInDirectory('landscaping')
    }); 
});

app.get('/services/decking', (req, res) => {
    res.render('services/default', {
        title: 'Decking & Balestrade',
        features: [
           "<strong> Materials:</strong> Timber, composite, PVC.",
           "<strong> Styles:</strong> Horizontal slats, lattice, privacy, decorative.",
           "<strong> Finishes:</strong> Stained, painted, natural, weathered, pressure - treated.",
           "<strong> Decking Designs:</strong> Single level, multi - level, wrap - around, platform, elevated.",
           "<strong> Fencing Features:</strong> Gates, trellises, planter boxes, security features."
        ],
        content: `
            <p class='mt-4'>
                Enhance the functionality and beauty of your outdoor space with our professional decking and fencing services. Whether you’re looking to create a private retreat or a stylish entertaining area, we offer a range of solutions to meet your needs. 
            </p>
            <p class='mt-4'>
                Our high-quality materials and expert craftsmanship ensure your deck and fence will withstand the elements and provide lasting enjoyment. From classic wooden decks to modern composite materials, and secure, attractive fencing options, we have the perfect solutions to complement your home and garden.
                Let us help you create an outdoor space that you’ll love for years to come.            
            </p>
        `,
        images: getImagesInDirectory('decking')
    });
});


app.get('/services/driveways-paving', (req, res) => {
    res.render('services/default', {
        title: 'Driveways & Paving',
        features: [
            "<strong> Materials:</strong> Concrete, asphalt, block paving, gravel, resin-bound.",
            "<strong> Styles:</strong> Patterned, permeable, tarmac, cobblestone, flagstone.",
            "<strong> Finishes:</strong> Polished, textured, coloured, stamped, brushed.",
            "<strong> Paving Designs:</strong> Herringbone, basket weave, stretcher bond, circular, mosaic.",
            "<strong> Additional Features:</strong> Edging, drainage solutions, decorative borders.",
        ],
        content: `
            <p class='mt-4'>
                Upgrade your property's kerb appeal and functionality with our superior driveways and paving services. We provide durable, aesthetically pleasing solutions tailored to your specific needs. Whether you need a new driveway, patio, or pathway, our team uses only the best materials and techniques to ensure a long-lasting result. 
            </p>
            <p class='mt-4'>
                We specialise in a variety of paving options that can enhance the look and feel of your outdoor spaces, providing both beauty and practicality. Count on us to deliver exceptional craftsmanship that will make your driveway and paving areas a standout feature of your home.            
            </p>
        `,
        images: getImagesInDirectory('paving')
    });
});

app.get('/services/garden-rooms', (req, res) => {
    res.render('services/default', {
        title: 'Garden Rooms',
        features: [
            "<strong>Materials:</strong> Timber, steel, glass, composite, insulated panels.",
            "<strong>Styles:</strong> Modern, traditional, rustic, minimalist, eco-friendly.",
            "<strong>Finishes:</strong> Cladding, render, paint, natural wood, metal.",
            "<strong>Uses:</strong> Office space, gym, studio, guest room, entertainment area."
        ],
        content: `
            <p class='mt-4'>
                Create an elegant extension of your living space with our custom garden rooms. Perfect for a home office, gym, studio, or relaxation space, our garden rooms are designed to meet your specific needs while blending seamlessly with your outdoor environment.
            </p>
            <p class='mt-4'>
                Built using high-quality materials and modern construction techniques, our garden rooms provide a comfortable, year-round retreat. Enjoy the convenience of an additional room that brings you closer to nature without sacrificing comfort or style. Let us help you design and build a garden room that enhances your lifestyle and adds value to your property.
            </p>
        `,
        images: getImagesInDirectory('garden-room')
    });
});


app.get('/services/outdoor-kitchens', (req, res) => {
    res.render('services/default', {
        title: 'Outdoor Kitchens',
        features: [
                "<strong>Materials:</strong> Stainless steel, stone, brick, concrete, tile.",
                "<strong>Appliances:</strong> Grills, smokers, pizza ovens, refrigerators, sinks.",
                "<strong>Countertops:</strong> Granite, quartz, concrete, stainless steel, tile.",
                "<strong>Cabinetry:</strong> Weatherproof, custom-built, modular, wood, metal.",
                "<strong>Features:</strong> Bar seating, pergolas, storage solutions.",
            
        ],
        content: `
            <p class='mt-4'>
                Elevate your outdoor entertaining with our bespoke outdoor kitchen services. Perfect for hosting family and friends, our outdoor kitchens are designed to provide all the conveniences of indoor cooking in a stylish, open-air setting. 
            </p>
            <p class='mt-4'>
                We offer a range of custom solutions that include everything from state-of-the-art grills and smokers to sinks, refrigerators, and prep areas. Our designs are tailored to fit your space and cooking style, ensuring that your outdoor kitchen is both functional and beautiful. Enjoy the ultimate al fresco dining experience with a kitchen that transforms your garden into a gourmet haven.            
            </p>
        `,
        images: getImagesInDirectory('outdoor-kitchens')
    });
});



app.get('/services/fencing', (req, res) => {
    res.render('services/default', {
        title: 'Fencing',
        features: [
            "<strong>Materials:</strong> Timber, metal, PVC, composite, ",
            "<strong>Styles:</strong>  horizontal slats, lattice, privacy, decorative.",
            "<strong>Finishes:</strong> Stained, painted, natural, weathered, pressure - treated.",
            "<strong>Features:</strong> Gates, trellises, integrated lighting, planter boxes, security features.",
            "<strong>Designs:</strong> Vertical boards, shadowbox, split rail, panel, woven.",

        ],
        content: `
            <p class='mt-4'>
                Enhance the security, privacy, and aesthetic appeal of your property with our professional fencing services. Our expert team specialises in installing high-quality fences that not only provide a functional barrier but also complement the overall design of your outdoor space. 
            </p>
            <p class='mt-4'>
                Whether you need a traditional wooden fence for a classic look, a modern metal fence for sleek sophistication, or a durable composite fence for low maintenance, we have the perfect solution for you. With a focus on precision craftsmanship and attention to detail, we ensure that your fencing is built to last and enhances the beauty of your property.            
            </p>
        `,
        images: getImagesInDirectory('fencing')
    });
});

app.get('/rhs', (req, res) => {
    res.render('services/default', {
        title: 'RHS',
        features: false,
        content: `
            <p class='mt-4'>
                We were honoured to be invited to work on the Royal Horticultural Society nocturnal pollinators experience garden at the tatton park flower show. this unique garden showcased flowering plants that emit heady scents at night to attract moths, highlighting the crucial but often overlooked role of these "invisible" pollinators. 
                our work in partnership with <a href="https://www.sharonhockenhull.co.uk/" target="_blank">Sharon Hockenhull</a gained significant attention and was even featured on countryfile.</p>
                <p class='mt-4 mb-8'>
                the garden was inspired by a 2020 study that underscored the importance of moths in pollination, aiming to raise awareness and encourage the creation of more moth-friendly gardens. this prestigious project was a testament to our commitment to innovative and impactful landscaping.
            </p>
            
            <a class="mt-8 px-4 py-2 rounded bg-black text-white" href="https://www.rhs.org.uk/shows-events/rhs-flower-show-tatton-park/gardens/2023/rhs-nocturnal-pollinator-experience" target="_blank">Read more</a>


        `,
        images: getImagesInDirectory('rhs')
    });
        
});

app.get('/contact', (req, res) => {

    // const nodemailer = require('nodemailer');

    // app.post('/contact', (req, res) => {
    //     const { name, email, message } = req.body;

    //     const transporter = nodemailer.createTransport({
    //         service: 'gmail',
    //         auth: {
    //             user: 'your-email@gmail.com',
    //             pass: 'your-password'
    //         }
    //     });

    //     const mailOptions = {
    //         from: `${name} <${email}>`,
    //         to: 'your-email@gmail.com',
    //         subject: 'Contact Form Submission',
    //         text: message
    //     };

    //     transporter.sendMail(mailOptions, (error, info) => {
    //         if (error) {
    //             console.log(error);
    //             res.status(500).send('An error occurred');
    //         } else {
    //             console.log('Email sent: ' + info.response);
    //             res.send('Email sent successfully');
    //         }
    //     });
    // });



    res.render('contact');
});






app.listen(PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});
