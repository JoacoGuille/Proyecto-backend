export default (err, req, res, next) => {
  console.error(err)
  res.status(500).json({ mensaje: "Error del servidor" })
}