import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: false,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
    },
});

export async function sendMail(
    name: string, 
    email: string
) {
    const info = await transporter.sendMail({
        from: `John Doe <${process.env.MAIL_USER}>`, // sender address
        to: `${name} <${email}>`, // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    })

    console.log("Message sent: %s", info.messageId);
}