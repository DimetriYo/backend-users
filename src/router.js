import { json, Router } from "express"
import { rootRouter } from "./rootRouter/index.js"
import { ursersRouter } from "./usersRouter/index.js"

export const router = Router()

router.use(json())

router.use("/users", ursersRouter)
router.use("/", rootRouter)
