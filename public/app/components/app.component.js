"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var person_1 = require("../models/person");
var AppComponent = (function () {
    function AppComponent() {
        this.person = new person_1.Person('Doe', 'John', 15);
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n        <h1>Personne A </h1>\n        <div><label>Nom :</label> {{person.nom}} </div>\n        <div><label>Prenom :</label> {{person.prenom}} </div>\n        <div><label>Age :</label> {{person.age}} </div>\n    "
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
