const httpStatus = require("../helpers/httpStatus");

const AuthorsController = (Author) => {
  const getAllAuthors = async (req, res, next) => {
    try {
      const { query } = req;
      const response = await Author.find(query);
      return res.status(httpStatus.OK).json(response);
    } catch (err) {
      next(err);
    }
  };

  const postAuthor = async (req, res, next) => {
    try {
      const { body } = req;
      const author = await new Author(body);
      await author.save();
      return res.status(httpStatus.CREATED).json(author);
    } catch (err) {
      next(err);
    }
  };

  const getAuthorById = async (req, res, next) => {
    try {
      const { params } = req;

      const response = await Author.findById(params.id);

      return res.status(httpStatus.OK).json(response);
    } catch (err) {
      next(err);
    }
  };

  const putAuthorById = async (req, res, next) => {
    try {
      const { params, body } = req;
      const response = await Author.updateOne(
        {
          _id: params.id,
        },
        {
          $set: {
            authorName: body.authorName,
            books: body.books,
            publicationDate: body.publicationDate,
            subject: body.subject,
          },
        }
      );
      return res.status(201).json(response);
    } catch (err) {
      next(err);
    }
  };

  const deleteById = async (req, res, next) => {
    try {
      const { params } = req;
      await Author.findByIdAndDelete(params.id);

      return res.status(httpStatus.OK).send("Data successful deleted");
    } catch (err) {
      next(err);
    }
  };

  return {
    getAllAuthors,
    getAuthorById,
    postAuthor,
    putAuthorById,
    deleteById,
  };
};
module.exports = AuthorsController;
