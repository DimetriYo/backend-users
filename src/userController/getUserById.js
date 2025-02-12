import { users } from "../db/users.js"

export const getUserById = (searchedId) => {
  const user = users.find(({ id }) => id === searchedId)

  if (!user) {
    throw new Error(`There is no user with id: ${searchedId}`)
  }

  return user
}
