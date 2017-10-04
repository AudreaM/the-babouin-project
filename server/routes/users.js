var express = require('express');
var router = express.Router();
var Person = require('../models/personModel');

/* GET users listing. */
router.get('/', function(req, res) {

    console.log('Nouvelle requête reçue en GET');

    // Création d'un nouvel utilisateur
    var personneA = new Person({
        nom : 'Doe',
        prenom : 'John',
        age : 15
    });

    console.log('Fin construction modele : \n\t');
    console.log('Nom: ' + personneA.nom + '\n\t');
    console.log('Prenom: ' + personneA.prenom + '\n\t');
    console.log('Age: ' + personneA.age + '\n\t');


    //res.render('users',personneA);
    res.json(personneA);
});

router.post('/', function(req, res) {

    console.log('Nouvelle requête reçue en POST');

    // Création d'un nouvel utilisateur
    var personneA = new Person({
        nom : new String(req.body.nom),
        prenom : new String(req.body.prenom),
        age : Number(req.body.age)
    });

    console.log(personneA);

    personneA.save(function (err) {
        if (err) {
            console.log('Erreur lors de l\'enregistrement en base : ');
            console.log(err);
        }
    });


    res.json(personneA);
});

module.exports = router;
