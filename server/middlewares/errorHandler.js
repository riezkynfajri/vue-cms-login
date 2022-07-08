module.exports = function errorHandler(err, req, res, next) {
  let code = 500
  let message = "Internal Server Error"

  if (err.name === "SequelizeUniqueConstraintError" || err.name === "SequelizeValidationError") {
    code = 400
    const errors = err.errors.map((el) => el.message)
    message = errors.join(", ")
  } else if (err.message === "invalid") {
    code = 401
    message = "Invalid Username / Password"
  } else if (err.name === "JsonWebTokenError" || err.message === "user not found") {
    code = 401
    message = "You're Unauthorized"
  }

  res.status(code).json({ code, message })
}
