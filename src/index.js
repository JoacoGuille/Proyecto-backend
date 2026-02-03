import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoutes from "./routes/authRoutes.js"
import tareasRoutes from "./routes/tareasRoutes.js"
import errorMiddleware from "./middlewares/errorMiddleware.js"

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/auth", authRoutes)
app.use("/api/tareas", tareasRoutes)

app.use(errorMiddleware)

mongoose.connect(process.env.MONGODB_URI)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log("Servidor corriendo en puerto " + PORT)
})