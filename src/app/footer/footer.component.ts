import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
    email = 'aderab.elmehdi@gmail.com';
    phone = '06 14 16 00 86';
    linkedin = 'https://www.linkedin.com/in/el-mehdi-aderab-24a971221/';
    github = 'https://github.com/ElMehdiAderab';
    year = new Date().getFullYear();
}