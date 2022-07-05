const express = require("express");
const peopleController = require("../controllers/peopleController");
const validator = require("express-joi-validation").createValidator({});
const bodySchema = require("../validations/peopleBodyValidator");
const querySchema = require("../validations/peopleQuery");
const paramsSchema = require("../validations/peopleParams");

const router = (People) => {
  const peopleRouter = express.Router();

  const {
    getAllPeople,
    getPeopleById,
    postPeople,
    putPeopleById,
    deletePeopleById,
  } = peopleController(People);

  peopleRouter
    .route("/people")
    .get(getAllPeople)
    .post(validator.body(bodySchema), postPeople);

  peopleRouter
    .route("/people/:id")
    .get(getPeopleById)
    .put(validator.body(bodySchema), putPeopleById)
    .delete(deletePeopleById);

  peopleRouter
    .route("/people/username")
    .get(validator.query(querySchema), getAllPeople);

  peopleRouter
    .route("/people/params")
    .get(validator.query(paramsSchema), getAllPeople);

  return peopleRouter;
};

module.exports = router;
