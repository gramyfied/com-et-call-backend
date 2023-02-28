const mongoose = require("mongoose");

const historiqueSchema = mongoose.Schema({
    problematique: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Problematique",
    },
    enfant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Enfant",
    },
    date: Date,
});

const Historique = mongoose.model("Historique", historiqueSchema);

module.exports = Historique;
