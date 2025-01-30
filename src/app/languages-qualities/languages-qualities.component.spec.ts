import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagesQualitiesComponent } from './languages-qualities.component';

describe('LanguagesQualitiesComponent', () => {
  let component: LanguagesQualitiesComponent;
  let fixture: ComponentFixture<LanguagesQualitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LanguagesQualitiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguagesQualitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
