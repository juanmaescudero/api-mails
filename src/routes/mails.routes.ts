import { Router } from "express";
import { MAIL_USER_REGISTERED, MAIL_LOST_PASSWORD } from "./constants";
import { mailController } from "../controllers/mails.controller";

export const router = Router()

router.post(MAIL_USER_REGISTERED, mailController)

router.post(MAIL_LOST_PASSWORD, mailController)