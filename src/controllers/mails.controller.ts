import { ETemplate } from "../interfaces/mail.interface"
import { sendMail } from "../mails/mail.manager"
import { errorMiddleware } from "./error.controller"

export const templateExists = (template: ETemplate): boolean => {
    if (template !== ETemplate.USER_REGISTER 
    && template !== ETemplate.LOST_PASSWORD) {
        return false
    }
    return true
}

export const mailController = async (req, res, next) => {
    const { name, email, template } = req.body

    try {
        if (!name || !email || !template || !templateExists(template)) {
            errorMiddleware(400, 'Bad request', res)
        }

        await sendMail({ name: name, email: email, template: template })
        res.status(200).send({ message: 'Mail sent' })
    } catch (err) {
        next(err)
    }
}