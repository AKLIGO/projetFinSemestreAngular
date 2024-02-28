import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploDuTempsComponent } from './emplo-du-temps.component';

describe('EmploDuTempsComponent', () => {
  let component: EmploDuTempsComponent;
  let fixture: ComponentFixture<EmploDuTempsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmploDuTempsComponent]
    });
    fixture = TestBed.createComponent(EmploDuTempsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
