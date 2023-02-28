const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  nom: String,
  prenom: String,
  password: String,
  token: String,
  email: String,
  tel: String,
  historiques: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Historique",
    },
  ],
  enfants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Enfant",
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
