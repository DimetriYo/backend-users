import { Router } from "express"
import { getRootHandler } from "./getRootHandler.js"

export const rootRouter = Router()

rootRouter.route("/").get(getRootHandler)
