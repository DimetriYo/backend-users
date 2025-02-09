import { Router } from "express"
import {
  getAllUsersHandler,
  getSingleUserHandler,
  patchUserHandler,
  postNewUserHandler,
} from "./handlers/index.js"

export const ursersRouter = Router()

ursersRouter.route("/").get(getAllUsersHandler).post(postNewUserHandler)
ursersRouter.route("/:userId").get(getSingleUserHandler).patch(patchUserHandler)
