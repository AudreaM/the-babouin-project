"use strict";
// Définition de la classe personne
// Elle possède les mêmes attributs que le modèle utilisé côté serveur
Object.defineProperty(exports, "__esModule", { value: true });
var Person = (function () {
    function Person(nom, prenom, age) {
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
    }
    return Person;
}());
exports.Person = Person;
