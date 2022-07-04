const ERROR_HANDLER = {
  mongoServerError: (res, err) =>
    res.status(400).send({
      error: err.name,
      cause: err.message,
      message: "no puedes usar el mismo username, email o phone",
    }),

  deafaultError: (res, err) =>
    res.status(500).send({ error: err.name, cause: err.message }),
};
const errorHandler = (err, req, res) => {
  const handler = ERROR_HANDLER[err.name] || ERROR_HANDLER.deafaultError;
  handler(res, err);
};

module.exports = errorHandler;
