import mongoose from "mongoose"

const tareaSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true
  },
  completada: {
    type: Boolean,
    default: false
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
})

export default mongoose.model("Tarea", tareaSchema)