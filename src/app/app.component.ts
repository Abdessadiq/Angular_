import { Component } from '@angular/core';

/** un web component c'est une classe qui utilise un décorateur qui s'appelle @component  */
@Component({
  /**c'est le nom de la balise qu'on va utilisé pour afficher ce web component */
  selector: 'app-root',
  /**qu'il est le fichier html  */
  templateUrl: './app.component.html',
  /** c'est quoi le fichier css de ce component */
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Demo Angular';
}
/** -----Pour les services
 * Un service peut être utiliser dans n'import web componant via le mécanisme de l'injection
 * de dépendance..Le même service peut être utiliser dans n'import composant..
 *
 */

/** ---------------- Les derictives
 * C'es quelque choses qui existe déjà dans html5 comme par exemple : <input type="text" required>
 * donc required c'est des derictives et la même choses pour angular on peut créer des directives
 *
 *
 */

/**-----------------------Les pips " | "
 * Pour formater les données comme : {{dateNaissance | date : 'dd/MM/yyyy'}}
 * ça c'est pour formater la date par exemple
 */

/** Pour générer un composant avec les commande ng
 * ng g c NameComponant
 * Créer les fichier de composant et updater le fichier appModule ts
 */
