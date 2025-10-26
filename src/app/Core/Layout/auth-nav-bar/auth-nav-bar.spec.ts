import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthNavBar } from './auth-nav-bar';

describe('AuthNavBar', () => {
  let component: AuthNavBar;
  let fixture: ComponentFixture<AuthNavBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthNavBar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthNavBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
