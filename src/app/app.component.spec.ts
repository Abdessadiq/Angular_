import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
  /** c'est  ce fichier qui se charge de faire les test unitaire
   * Angular utilise un framework qui s'appelle jasmine c'est un framework pour
   * créer des test unitaire
   * donc on utilise la commande ng test il va parcourire le projet et
   * a chaque fois quand il trouve un fichier ...spec.ts il va l'exécuter et après
   * il va nous dire qui sont les web component qui passe qui passe pas ..
   */
describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Basic'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Basic');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('Basic app is running!');
  });
});
