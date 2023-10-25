
const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const { error } = require('console')

const app = express()
const port = process.env.PORT || 3000

//Body parser middleware to parse from data 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

//Configure Nodemailer
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'riverbh01@gmail.com',
        pass: 'HaydukeLives16!',
    }
});

app.post('/submit', (req, res) => {
    const { firstName, lastName, email, subject, message } = req.body;

    const mailOptions = {
        from: 'riverbh01@gmail.com',
        to: 'riverbh01@gmail.com',
        subject: subject,
        text: 'Name: ${firstName} ${lastName}\nEmail: ${email}\nMeassage: ${message}'
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Email not sent');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully. ')
        }
    });
});

app.listen(port, () => {
    console.log('Server is running on port ${port}')
})

