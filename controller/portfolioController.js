const nodemailer = require('nodemailer');
const sendGridTransport = require('nodemailer-sendgrid-transport');

// Transports 
const transporter = nodemailer.createTransport(
    sendGridTransport({
        auth: {
            api_key: process.env.API_SENDGRID,
        },
    })
);

const sendEmailController = (req,res) => {
    try {
        const { name, email, msg } = req.body;

        // validation
        if (!name || !email || !msg) {
            return res.status(500).send({
                success: false,
                message: "All fields are required",
                error: "All fields are required"
            })
        }

        // email matter

        transporter.sendMail({
            to: "wagh.krushna2004@gmail.com",
            from: "krish.dev_1@outlook.com",
            subject: "Portfolio Contact Form",
            html: `
            
                <h1>New Message</h1>
                <hr />
                <h3>Name: ${name}</h3>
                <h3>Email: ${email}</h3>
                <h3>Message: ${msg}</h3>
                
            `,
        });

        return res.status(200).send({
            success: true,
            message: "Message sent successfully",
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "Send Email Api Error",
            error
        });
    }
};

module.exports = { sendEmailController };