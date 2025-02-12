import { getUserById } from "../../userController/getUserById.js"

export const getSingleUserHandler = (req, res, next) => {
  try {
    const userId = req.params.userId

    if (!userId) {
      throw new Error("There is no user with such an ID")
    }

    const user = getUserById(userId)

    res.json(user)
  } catch (e) {
    next(e)
  }
}
