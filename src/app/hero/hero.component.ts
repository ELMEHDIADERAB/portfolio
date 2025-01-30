import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
    name = "ADERAB EL MEHDI";
    title = "Développeur Full Stack";
    projectsCount = "+10";
    projectsText = "Projets réalisés";
    experienceCount = "+3";
    experienceText = "Ans d'expérience";
    imagePath = "/assets/me.png"; // Remplace par le chemin de ton image
}
