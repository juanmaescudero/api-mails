import nodemailer from "nodemailer"
import dotenv from 'dotenv'
import fs from 'fs'
import path from 'path'
import { IMailProps, ETemplate } from "../interfaces/mail.interface"

dotenv.config()

interface ISelectedTemplate {
    template: string,
    subject: string
}

const handleSelectTemplate = (template: ETemplate): ISelectedTemplate => {
    let templatePath
    let subject

    switch (template) {
        case ETemplate.USER_REGISTER:
            templatePath = path.join(__dirname, '../mails/templates/userRegister.html')
            subject = 'Account Created Successfully' 
            break;
        case ETemplate.LOST_PASSWORD:
            templatePath = path.join(__dirname, '../mails/templates/lostPassword.html')
            subject = 'Password Reset Request'
            break;
        default:
            templatePath = ''
            subject = ''
            break;
    }

    const templateContent = fs.readFileSync(templatePath, 'utf8')
    return { template: templateContent, subject: subject }
}

const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: true,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
    },
});

export async function sendMail(props: IMailProps) {
    const { name, email, template } = props
    
    const selectedTemplate: ISelectedTemplate = handleSelectTemplate(template)

    const info = await transporter.sendMail({
        from: `My api <${process.env.MAIL_USER}>`,
        to: `${name} <${email}>`, 
        subject: selectedTemplate.subject, 
        html: selectedTemplate.template
    })

    console.log("Message sent: %s", info.messageId);
}
