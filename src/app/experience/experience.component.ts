import { Component, AfterViewInit, ViewChildren, ElementRef, QueryList } from '@angular/core';
import {
    trigger,
    state,
    style,
    transition,
    animate
} from '@angular/animations';

interface Experience {
    title: string;
    company: string;
    technologies: string;
    description: string;
    date: string;
}

@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.css'],
    animations: [
        trigger('stepAnimation', [
            state('inactive', style({
                opacity: 0,
                transform: 'translateY(20px)'
            })),
            state('active', style({
                opacity: 1,
                transform: 'translateY(0)'
            })),
            transition('inactive <=> active', animate('300ms ease-in-out'))
        ])
    ]
})
export class ExperienceComponent implements AfterViewInit {
    experiences: Experience[] = [
        {
            title: 'Développeur Full Stack - Stage de Projet de Fin d\'Année',
            company: 'ENGELVIN MAROC',
            technologies: 'Spring Boot, Spring Security, Mysql, Thymeleaf',
            date: '07/2024  - 09/2024',
            description: 'Conception et réalisation d\'une application web pour la gestion des commandes fournisseur.',
        },
        {
            title: 'Développeur Full Stack - Stage de Projet de Fin d\'étude',
            company: 'FAST GLOBAL SERVICE',
            technologies: 'PHP, MySQL, WAMP, HTML5, CSS3, JS',
            date: '03/2022 - 06/2022',
            description: 'Développement d\'une Solution Intégrée de Gestion de Stock et Plateforme E-Commerce.',
        },
        {
            title: 'Développeur WORDPRESS - Stage de Projet de Fin d\'étude',
            company: 'WISE ACADEMEX',
            technologies: 'WORDPRESS',
            date: '03/2021 - 04/2021',
            description: 'Réalisation du site web de l\'entreprise.',
        }
    ];
    @ViewChildren('step') steps!: QueryList<ElementRef>;


    ngAfterViewInit(): void {
        this.observeElements();
    }
    observeElements() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                     observer.unobserve(entry.target);
                }
            });
        },
            { threshold: 0.2 }
        );
        this.steps.forEach((step) => {
            observer.observe(step.nativeElement);
        })
    }
}

/*import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  experiences = [
    {
      title: 'Développeur Full Stack - Stage de Projet de Fin d\'Année',
      company: 'ENGELVIN MAROC',
      technologies: 'Spring Boot, Spring Security, Thymeleaf',
      description: 'Conception et réalisation d\'une application web pour la gestion des commandes fournisseur.'
    },
    {
      title: 'Développeur Full Stack - Stage de Projet de Fin d\'étude',
      company: 'FAST GLOBAL SERVICE',
      technologies: 'PHP, MySQL, WAMP, HTML5, CSS3, JS',
      description: 'Développement d\'une Solution Intégrée de Gestion de Stock et Plateforme E-Commerce.'
    },
        {
            title: 'Développeur WORDPRESS - Stage de Projet de Fin d\'étude',
            company: 'WISE ACADEMEX',
            technologies: 'WORDPRESS',
            description: 'Réalisation du site web de l\'entreprise.'
        }
  ];
}*/