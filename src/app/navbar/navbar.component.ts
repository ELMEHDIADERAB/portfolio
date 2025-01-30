import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  navLinks = [
    { label: 'Accueil', id: 'accueil', icon: 'home' },
    { label: 'Compétences', id: 'competences', icon: 'psychology' }, // Adjust icons as you prefer
    { label: 'Expérience', id: 'experience', icon: 'work' },
    { label: 'Certifications', id: 'certifications', icon: 'school' },
    { label: 'Projets', id: 'projets', icon: 'code' },
    { label: 'Langues & Qualités', id: 'languages-qualities', icon: 'language' }
  ];
}