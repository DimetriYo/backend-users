import express from "express"
import { router } from "./src/router.js"

const PORT = 3001

const server = express()

server.use(router)

server.listen(PORT, () => console.log(`Server is online on port: ${PORT}`))
