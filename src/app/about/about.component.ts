import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  description = "À la recherche d'un stage PFE à partir du mois de mars 2025. Je suis passionné par le développement full-stack et je suis impatient de mettre mes compétences en pratique dans une entreprise dynamique.";
  email = "aderab.elmehdi@gmail.com";
  phone = "06 14 16 00 86";
  location = "Hay Moullay Abdellah, Casablanca";
}