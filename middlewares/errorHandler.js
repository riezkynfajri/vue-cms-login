module.exports = function errorHandler(err, req, res, next) {
  let code = 500
  let message = "Internal Server Error"

  res.status(code).json({ code, message })
}
