import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginMembrosAPMComponent } from './login-membros-apm.component';

describe('LoginMembrosAPMComponent', () => {
  let component: LoginMembrosAPMComponent;
  let fixture: ComponentFixture<LoginMembrosAPMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginMembrosAPMComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginMembrosAPMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
