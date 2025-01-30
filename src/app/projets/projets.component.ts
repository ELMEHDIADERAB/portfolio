/*import { Component } from '@angular/core';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})
export class ProjetsComponent {
  projets = [
    {
      name: 'Projet Desktop .Net',
      description: 'Développement d\'une application de gestion bibliothèque (.Net).',
    },
    {
      name: 'Projet Web',
      description: 'Application de Salle Sport (Spring Security - Thymeleaf) Application E-commerce (Django) Application de Gestion des Tâches (Html - Css - Js - MySql - PHP).',
    },
       {
          name: 'Projet Mobile',
          description: 'Application de Gestion Projet (Java).',
       },
  ];
}*/
import { Component, OnInit, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

interface GithubRepo {
    name: string;
    description: string;
    html_url: string;
    homepage: string | null;
    language: string;
}

@Component({
    selector: 'app-projets',
    templateUrl: './projets.component.html',
    styleUrls: ['./projets.component.css']
})
export class ProjetsComponent implements OnInit, AfterViewInit {
    githubRepos: GithubRepo[] = [];
    selectedRepositories: string[] = [
         'alx-higher_level_programming',
         'gestion-taches',
         'alx-pre_course',
         'alx-system_engineering-devops',
         'engelvin-maroc',
        'AppCharity',
        'auctionappAll',
        //'E-Commerce',
        'gestion-etudiants ',
       // 'ELMEHDIADERAB',
         //'LogementWS',
         //'movies-app',
        // 'PartsUnlimitedE2E',
         //'printf',
        // 'RSA-Factoring-Challenge'
      ];
    @ViewChildren('repoCard') repoCards!: QueryList<ElementRef>;

    constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

    ngOnInit(): void {
        this.fetchGithubRepos();
    }

    ngAfterViewInit(): void {
        this.observeElements();
    }
    fetchGithubRepos(): void {
        const githubUsername = 'ELMEHDIADERAB';  // <-- Replace with your GitHub username
        const apiUrl = `https://api.github.com/users/${githubUsername}/repos`;

        this.http.get<GithubRepo[]>(apiUrl).subscribe((repos) => {
            this.githubRepos = repos.filter(repo => this.selectedRepositories.includes(repo.name));
        });
    }
    sanitizeUrl(url: string): SafeUrl {
        return this.sanitizer.bypassSecurityTrustUrl(url);
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
            { threshold: 0.2 }  //Adjust the threshold as you see fit
        );
        this.repoCards.forEach((card) => {
            observer.observe(card.nativeElement); // Start observing all elements
        })
    }
}