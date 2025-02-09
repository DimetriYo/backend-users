import { patchUser } from "../../userController/patchUser.js"

export const patchUserHandler = (req, res, next) => {
  try {
    const id = req.params.userId
    const data = req.body
    const patchedUser = patchUser(id, data)
    res.json(patchedUser)
  } catch (e) {
    next(e)
  }
}
