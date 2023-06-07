const nodemailer = require("nodemailer");
const hbs = require("nodemailer-express-handlebars");
const path = require("path");

const sendEmail = async (subject, send_to, sent_from, reply_to, template, name, link) => {
    
    const transporter = nodemailer.createTransport({
        service: process.env.EMAIL_HOST,
        port: 587,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
        tlc: {
            rejectUnauthorized: false,
        }
    });

    const handlebarsOptions = {
        viewEngine: {
            extName: ".handlebars",
            partialsDir: path.resolve("./views"),
            defaultLayout: false,
        },
        viewPath: path.resolve("./views"),
        extName: ".handlebars",
    };

    transporter.use("compile", hbs(handlebarsOptions));

    const options = {
        from: sent_from,
        to: send_to,
        replyTo: reply_to,
        subject,
        template,
        context: {
            name,
            link,
        }
    }

    transporter.sendMail(options, function (err, info) {
        if (err) {
            console.log(err);
        } else {
            console.log(info);
        }
    })
};

module.exports = { sendEmail };