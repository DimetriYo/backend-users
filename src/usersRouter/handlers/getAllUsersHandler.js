import { getAllUsers } from "../../userController/getAllUsers.js"

export const getAllUsersHandler = (req, res) => {
  res.json(getAllUsers())
}
