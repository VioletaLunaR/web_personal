var express = require("express");
var router = express.Router();

const Joi = require("joi");
const Message = require("../models/message");

router.get("/", function (req, res, next) {
  Message.findAll().then((result) => {
    res.send(result);
  });
});

router.post("/", function (req, res, next) {

  Message.create({ content: req.body.content}).then(
    (result) => {
      res.send(result);
    }
  );
});

router.get("/:id", (req, res) => {
  Message.findByPk(req.params.id).then((response) => {
    if (response === null)
      return res
        .status(404)
        .send("The Message with the given id was not found.");
    res.send(response);
  });
});

router.post("/", (req, res) => {
  Message.create({ content: req.body.content }).then(
    (result) => {
      res.send(result);
    }
  );
});

router.put("/:id", (req, res) => {
  Message.update(req.body, { where: { id: req.params.id } }).then((response) => {
    if (response[0] !== 0) res.send({ message: "Message updated" });
    else res.status(404).send({ message: "Message was not found" });
  });
});

router.delete("/:id", (req, res) => {
  Message.destroy({
    where: {
      id: req.params.id,
    },
  }).then((response) => {
    if (response === 1) res.status(204).send();
    else res.status(404).send({ message: "Client was not found" });
  });
});


module.exports = router;