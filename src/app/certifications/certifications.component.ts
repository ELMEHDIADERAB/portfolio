import { Component } from '@angular/core';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent {
 certifications = [
    { name: 'The Art of the Job Interview', provider: 'Big Interview', date: '20 Mai 2024' },
    { name: 'React Native', provider: 'Meta', date: '14 Mai 2024' },
    { name: 'Introduction to Containers w/ Docker, Kubernetes & OpenShift', provider: 'IBM', date: '10 Mai 2024' },
     { name: 'Introduction to Git and GitHub', provider: 'Google', date: '26 Avril 2024' },
     { name: 'Virtual Networks in Azure', provider: 'Whizlabs', date: '9 Avril 2024' },
    { name: 'Étudier en France: French Intermediate course B1-B2', provider: 'École Polytechnique', date: '6 Avril 2024' },
     { name: 'React Basics', provider: 'Meta', date: '16 Janvier 2024' },
      { name: 'Introduction to Java and Object-Oriented Programming', provider: 'University of Pennsylvania', date: '14 Novembre 2023' },
      { name: 'Python for Everybody', provider: 'University of Michigan', date: '14 Avril 2023' },
     { name: 'Unix System Basics', provider: 'Codio', date: '5 Avril 2023' },
      { name: 'Software Engineering: Modeling Software Systems using UML', provider: 'The Hong Kong University of Science and Technology', date: '19 Mars 2023' },
  ];
}