//hacer las rutas

const express = require("express");
const authorControllers = require("../controllers/authorController");
//Const authorRouter = require("./routes/authorRouter")

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
  .post(postAuthor);
  authorRouter
    .route("/author/:id")
    .get(getAuthorById)
    .put(putAuthorById)
    .delete(deleteById);
  return authorRouter;
};

module.exports = router;
