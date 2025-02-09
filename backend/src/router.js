import { json, Router } from "express"
import { rootRouter } from "./rootRouter/index.js"
import { ursersRouter } from "./usersRouter/index.js"

export const router = Router()

router.use((req, res) => "hello from server")
