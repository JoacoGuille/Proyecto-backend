import User from "../models/User.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const register = async (req, res, next) => {
  try {
    const { email, password } = req.body

    const existe = await User.findOne({ email })
    if (existe) return res.status(400).json({ mensaje: "El usuario ya existe" })

    const passwordHash = await bcrypt.hash(password, 10)

    const user = await User.create({
      email,
      password: passwordHash
    })

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d"
    })

    res.json({ token })
  } catch (error) {
    next(error)
  }
}

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body

    const user = await User.findOne({ email })
    if (!user) return res.status(400).json({ mensaje: "Credenciales incorrectas" })

    const ok = await bcrypt.compare(password, user.password)
    if (!ok) return res.status(400).json({ mensaje: "Credenciales incorrectas" })

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d"
    })

    res.json({ token })
  } catch (error) {
    next(error)
  }
}