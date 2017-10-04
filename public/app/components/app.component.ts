import {Component} from '@angular/core';

import {Person} from '../models/person'


@Component({
    selector : 'my-app',
    template : `
        <h1>Personne A </h1>
        <div><label>Nom :</label> {{person.nom}} </div>
        <div><label>Prenom :</label> {{person.prenom}} </div>
        <div><label>Age :</label> {{person.age}} </div>
    `
})

export class AppComponent {
    person = new Person('Doe','John',15);
}