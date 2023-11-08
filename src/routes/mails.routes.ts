import { Router } from "express";
import { MAIL_USER_REGISTERED } from "./constants";
import { userRegistered } from "../controllers/mails.controller";

export const router = Router()

router.post(MAIL_USER_REGISTERED, userRegistered)