var mongoose = require('../config/mongodb.js');

// Définition du schéma
var personSchema = mongoose.Schema( {
    nom : String,
    prenom : String,
    age : Number
});


// Création du modèle
var personModel = mongoose.model('Person', personSchema);

module.exports = personModel;