import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { mainModule } from 'process';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

/** La bibliothèque RxJS c'est une bibliothèque js qui va nous permettre de faire
 * la programmation réactive (Programming Reactive ) et cette programmation
 * il est basé sur un design pattern qui s'appelle observer
 * donc le design pattern observer c'est la base de la programmation réactive
 * c'est de la programmation asynchrone
 * donc toute la programmation réactive est basé sur la programmation asynchrone
 */

// main.ts il va démarrer puis il va chager un component qui s'appelle appModule

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
