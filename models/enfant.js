const mongoose = require("mongoose");

const etablissementSchema = mongoose.Schema({
    type: String,
    nom: String,
});

const enfantSchema = mongoose.Schema({
    prenom: String,
    etablissement: etablissementSchema,
});

const Enfant = mongoose.model("Enfant", enfantSchema);

module.exports = Enfant;