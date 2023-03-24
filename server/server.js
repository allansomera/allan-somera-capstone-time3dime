// const path = require("node:path")
const path = require("path")

// require("dotenv").config({ path: path.resolve(__dirname, "./.env") })
require("dotenv").config({ path: path.resolve(__dirname, ".env") })

const express = require("express")
const server = express()
const cors = require("cors")

server.use(express.json())
server.use(cors())

const usersRoutes = require("./routes/usersRouter")
server.use("/users", usersRoutes)

const tagsRoutes = require("./routes/tagsRouter")
server.use("/tags", tagsRoutes)

const PORT = process.env.PORT || 5500

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT} `)
})
