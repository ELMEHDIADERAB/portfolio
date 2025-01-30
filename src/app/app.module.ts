import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { MatStepperModule } from '@angular/material/stepper'; // Import des steppers
import { MatButtonModule } from '@angular/material/button'; // Import des boutons
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import des animations
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { HeroComponent } from './hero/hero.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjetsComponent } from './projets/projets.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
   HeroComponent,
    AboutComponent,
    EducationComponent,
    ExperienceComponent,
    SkillsComponent,
    ProjetsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // Ajouté pour les animations Angular Material
    MatStepperModule, // Ajouté pour le stepper
    MatButtonModule,  // Ajouté pour les boutons (facultatif si nécessaire)
    AppRoutingModule,
    HttpClientModule, // Add HttpClientModule here
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
