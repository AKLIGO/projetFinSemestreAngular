import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionEmploiListComponent } from './gestion-emploi-list.component';

describe('GestionEmploiListComponent', () => {
  let component: GestionEmploiListComponent;
  let fixture: ComponentFixture<GestionEmploiListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionEmploiListComponent]
    });
    fixture = TestBed.createComponent(GestionEmploiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
