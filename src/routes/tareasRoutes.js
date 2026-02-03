import { Router } from "express"
import {
  obtenerTareas,
  crearTarea,
  actualizarTarea,
  borrarTarea
} from "../controllers/tareasController.js"
import authMiddleware from "../middlewares/authMiddleware.js"

const router = Router()

router.use(authMiddleware)

router.get("/", obtenerTareas)
router.post("/", crearTarea)
router.patch("/:id", actualizarTarea)
router.delete("/:id", borrarTarea)

export default router