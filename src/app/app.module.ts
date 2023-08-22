import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// La classe appModule utilise un décorateur qui s'appelle @NgModule
// Les décorateur c'est l'équivalant de les annotations dans la programmation java
@NgModule({
  // Achaque fois quand je déclare ou quand je crée un web component il va être
  // déclarrer dans cette table de déclaration
  declarations: [AppComponent],
  // A chaque fois qu'on a besoin d'utilisé un composant externe on le déclare dans
  // cette table imports
  /**Par exemple quand on va recupérer des données dans la base de données via
   * les api on a besoin d'importer le module HttpClientModule
   */
  imports: [BrowserModule, AppRoutingModule],

  /** providers c'est pour déclarer les services c'est à dire les traitement
   * ou bien la logique de notre application
   */
  providers: [],
  /** dans bootstrap on spécifier qu'il est le component qui va être charger
   * en premier lieu
   */
  bootstrap: [AppComponent],
})
export class AppModule {}
