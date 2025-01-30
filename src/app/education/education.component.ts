import { Component, OnInit, AfterViewInit, ViewChildren, ElementRef, QueryList } from '@angular/core';

interface Education {
    date: string;
    title: string;
    description: string;
}

@Component({
    selector: 'app-education',
    templateUrl: './education.component.html',
    styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit, AfterViewInit {
    educations: Education[] = [
      {
          date: '2022 - Présent',
          title: 'École Marocaine des Sciences de l\'ingénieure',
          description: 'Cycle d\'ingénieur - INGÉNIERIE INFORMATIQUE ET RÉSEAUX'
      },
       {
          date: '2021 - 2022',
          title: 'Faculté des sciences juridiques, économiques et sociales d\'Ain Sebâa',
          description: 'Licence professionnelle - Méthodes informatique appliquées à la gestion des entreprises'
       },
      {
          date: '2019 - 2021',
          title: 'École supérieure de technologie de Sidi Bennour',
          description: 'Diplôme universitaire de technologie - Génie Informatique'
      },
        {
            date: 'Juin 2019',
            title: 'Groupe Scolaire Berrada',
            description: 'Baccalauréat - science physique'
        }
    ];
    @ViewChildren('timelineItem') timelineItems!: QueryList<ElementRef>;

    constructor() { }

    ngOnInit(): void {
    }
    ngAfterViewInit(): void {
        this.observeElements();
    }
     observeElements() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    observer.unobserve(entry.target); // Stop observing when it's visible
                }
            });
        },
            { threshold: 0.2 }
        );
        this.timelineItems.forEach((card) => {
            observer.observe(card.nativeElement); // Start observing all elements
        })
    }
}