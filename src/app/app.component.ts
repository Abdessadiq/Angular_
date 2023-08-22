import { Component } from '@angular/core';

/** un web component c'est une classe qui utilise un décorateur qui s'appelle @component  */
@Component({
  /**c'est le nom de la balise qu'on va utilisé pour afficher ce web component */
  selector: 'app-root',
  /**qu'il est le fichier html  */
  templateUrl: './app.component.html',
  /** c'est quoi le fichier css de ce component */
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Basic';
}
