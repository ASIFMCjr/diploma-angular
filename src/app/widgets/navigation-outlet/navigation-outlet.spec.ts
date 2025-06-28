import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationOutlet } from './navigation-outlet';

describe('NavigationOutlet', () => {
  let component: NavigationOutlet;
  let fixture: ComponentFixture<NavigationOutlet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationOutlet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationOutlet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
