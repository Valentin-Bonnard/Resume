import * as util from '../utils/crypt';
const nodemailer = require("nodemailer");

const encryptPassword = "1d70a2c03fe89160c2fbc5371bc9ed";
const encrypEmail = "0970bac830f28a61c2fdc5684382bb1602799689ed16c14dc445c06a12";

const transport  = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: "valentinbonnard0303@gmail.com",
        pass: util.decrypt(encryptPassword)
    },
});


export function sendEmail(to, subject, message) {
    const mailOptions = {
        from: "valentinbonnard0303@gmail.com",
        to,
        subject,
        html: message,
    };
    transport.sendMail(mailOptions, (error) => {
        if (error) 
            console.log(error);
        console.log('Message sent : ' + mailOptions);
    })
    transport.close();
};