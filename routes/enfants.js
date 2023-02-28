var express = require("express");
var router = express.Router();
require("../models/connection");

const Enfant = require("../models/enfant");

router.delete("/:id", (req, res) => {
    Enfant.deleteOne({
      _id: req.params.id
    }).then((deletedDoc) => {
      if (deletedDoc.deletedCount > 0) {
        res.json({ result: true });
      } else {
        res.json({ result: false, error: "User not found" });
      }
    });
});

  router.put("/:id/profileEnfant", (req, res) => {
  User.updateOne(
    {
      _id: req.params.id,
    },
    { $set: req.body }
  ).then((data) => {
    res.json({ result: true, result: data });
  });
});

module.exports = router;