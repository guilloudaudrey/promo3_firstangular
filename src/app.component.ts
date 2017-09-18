import { Component } from "@angular/core";

/*Les components sont en gros les controleurs de Angular <div class="col-lg-2">
Ces sont des classes qui seront liées à un template html et qui déclareont en leur sein
les propriétés et les méthodes accessibles au template en question
*/

@Component({

//le sélecteur indique la balise htm qui sera liée à ce component.
 selector: 'mon-app',
 template: '<h1>{{message}}</h1>'

})

export class AppComponent {
    private message:string = 'un truc dedans';

}