import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnseignantListComponent } from './enseignant-list.component';

describe('EnseignantListComponent', () => {
  let component: EnseignantListComponent;
  let fixture: ComponentFixture<EnseignantListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnseignantListComponent]
    });
    fixture = TestBed.createComponent(EnseignantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
