//hacer las rutas

const express = require("express");
const authorControllers = require("../controllers/authorController");
const validator = require("express-joi-validation").createValidator({});
const authorBodySchema = require("../validations/authorBodyValidations");
const authorQuerySchema = require("../validations/authorQuery");
const authorParamSchema = require("../validations/authorParams");

const router = (Author) => {
  const authorRouter = express.Router();
  const {
    getAllAuthors,
    getAuthorById,
    postAuthor,
    putAuthorById,
    deleteById,
  } = authorControllers(Author);

  authorRouter
    .route("/author")
    .get(getAllAuthors)
    .post( validator.body(authorBodySchema),postAuthor);

  authorRouter
    .route("/author/:id")
    .get(getAuthorById)
    .put(validator.body(authorBodySchema), putAuthorById)
    .delete( deleteById);

  authorRouter
    .route("/author/authorName")
    .get(validator.body(authorParamSchema), getAllAuthors);

  authorRouter
    .route("/author/params")
    .get(validator.query(authorQuerySchema), getAllAuthors);

  return authorRouter;
};

module.exports = router;
