import Tarea from "../models/Tarea.js"

export const obtenerTareas = async (req, res, next) => {
  try {
    const tareas = await Tarea.find({ userId: req.userId })
    res.json(tareas)
  } catch (error) {
    next(error)
  }
}

export const crearTarea = async (req, res, next) => {
  try {
    const tarea = await Tarea.create({
      titulo: req.body.titulo,
      userId: req.userId
    })

    res.status(201).json(tarea)
  } catch (error) {
    next(error)
  }
}

export const actualizarTarea = async (req, res, next) => {
  try {
    const tarea = await Tarea.findOne({
      _id: req.params.id,
      userId: req.userId
    })

    if (!tarea) {
      return res.status(404).json({ mensaje: "Tarea no encontrada" })
    }

    if (req.body.titulo !== undefined) tarea.titulo = req.body.titulo
    if (req.body.completada !== undefined) tarea.completada = req.body.completada

    await tarea.save()
    res.json(tarea)
  } catch (error) {
    next(error)
  }
}

export const borrarTarea = async (req, res, next) => {
  try {
    const tarea = await Tarea.findOneAndDelete({
      _id: req.params.id,
      userId: req.userId
    })

    if (!tarea) {
      return res.status(404).json({ mensaje: "Tarea no encontrada" })
    }

    res.json({ mensaje: "Tarea eliminada" })
  } catch (error) {
    next(error)
  }
}