/*import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills = {
    frameworks: ['Spring boot', 'ASP.NET Core', 'Symfony', 'Django', 'Spring cloud', 'Spring security', 'React'],
    languages: ['Java', 'C#', 'JavaScript', 'PHP', 'Python'],
    administration: ['Linux', 'Windows'],
    databases: ['MySQL', 'SQL Server', 'Oracle'],
    modeling: ['UML', 'Merise'],
    projectManagement: ['Agile (scrum)'],
    versionControl: ['Git', 'GitHub'],
      cloud: ['Azure'],
      devops: ['Docker','CI/CD'],
      other: ['Html','Css','Bootstrap'],
  };
}*/import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  skills = [
    { name: 'Spring Boot', image: '/assets/spring.png'},
    { name: 'Java', image: '/assets/images/java.png' },
    { name: 'C#', image: '/assets/images/csharp.png' },
    { name: 'GitHub', image: '/assets/images/github.png' },
    { name: 'Sql', image: '/assets/images/sql.png' },
    { name: 'ReactJS', image: '/assets/images/react.png' },
    { name: 'Angular', image: '/assets/images/angular.png' },
    { name: 'HTML', image: '/assets/images/html.png' },
    { name: 'CSS', image: '/assets/images/css.png'},
    { name: 'Bootstrap', image: '/assets/images/bootstrap.png' },
    { name: 'Docker', image: '/assets/images/docker.png'},        
    { name: 'Uml', image: '/assets/images/uml.png'},
  ];
}
