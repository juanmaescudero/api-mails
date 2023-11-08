import { sendMail } from "../mails/mail.manager"

export const userRegistered = async (req, res, next) => {
    const { name, email } = req.body
    try {
        console.log(name, email)
        if (!name || !email) {
            throw new Error('400: Bad request')
        }
        sendMail(name, email)
        res.send('User registered')
    } catch (err) {
        next(err)
    }
}