const mongoose = require("mongoose"); // on fait appel au module mongoose qui est un module Node
// Utilisation de la méthode Schema de mongoose pour créer un schéma de données
const furnitureSchema = mongoose.Schema({
  title: {type: String, required: true},
  type: {
    type: String,
    required: true,
    enum: {
      values: [
        "assise",
        "literie",
        "table",
        "bureau",
        "rangement",
        "linge de maison",
        "décoration",
        "luminaire",
        "art de la table",
        "salle de bain",
        "autre",
      ],
      message: "wrong type",
    },
  },
  description: {type: String, required: true},
  dimensions_cm: {
    height: {type: Number, required: true},
    width: {type: Number, required: true},
    depth: {type: Number, required: false},
  },
  colors: {
    type: String,
    required: true,
    enum: {
      values: [
        "argent",
        "beige",
        "blanc",
        "bleu",
        "bois",
        "bordeaux",
        "doré",
        "gris",
        "jaune",
        "marron",
        "multicolore",
        "noir",
        "orange",
        "rose",
        "rouge",
        "transparent",
        "vert",
        "violet",
        "autre",
      ],
      message: "wrong color",
    },
  },
  materials: {type: [String], required: true},
  pictureUrl: {type: String, required: true},
  price: {type: Number, required: true},
  status: {
    onSale: {type: Boolean, required: true},
    pending: {type: Boolean, required: true},
    sold: {type: Boolean, required: true},
  },
  seller: {type: String, required: true},
  date: {type: Date, required: true},
});
module.exports = mongoose.model("Furniture", furnitureSchema); // on exporte pour pouvoir le récupérer dans d'autres fichiers
