const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0'; // Listen on all network interfaces



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
    res.render('services/landscaping');
});

// app.get('/services/decking-fencing', (req, res) => {
//     res.render('decking-fencing');
// });

// app.get('/services/driveways-paving', (req, res) => {
//     res.render('driveways-paving');
// });

// app.get('/services/garden-rooms', (req, res) => {
//     res.render('garden-rooms');
// });

// app.get('/services/outdoor-kitchens', (req, res) => {
//     res.render('outdoor-kitchens');
// });


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
