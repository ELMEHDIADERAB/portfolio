import { Component } from '@angular/core';

@Component({
  selector: 'app-languages-qualities',
  templateUrl: './languages-qualities.component.html',
  styleUrls: ['./languages-qualities.component.css']
})
export class LanguagesQualitiesComponent {
  languages = {
    list: ['Arabe (langue maternelle)', 'Français (Courant)', 'Anglais (Intermédiaire)']
  };

  qualities = {
    list: ['Ponctuel', 'Esprit d\'équipe', 'Gestion du temps', 'Polyvalent', 'Auto-apprentissage']
  };
}