import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { login } from '../../state/auth.actions';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let store: MockStore;
  let dispatchSpy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent, ReactiveFormsModule],
      providers: [provideMockStore()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    dispatchSpy = spyOn(store, 'dispatch');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an invalid form when empty', () => {
    expect(component.loginForm.valid).toBeFalse();
  });

  it('should have a valid form when filled', () => {
    component.loginForm.setValue({ username: 'user', password: 'pass' });
    expect(component.loginForm.valid).toBeTrue();
  });

  it('should dispatch login action on submit', () => {
    component.loginForm.setValue({ username: 'user', password: 'pass' });
    component.onSubmit();
    expect(dispatchSpy).toHaveBeenCalledWith(login({ username: 'user', password: 'pass' }));
  });

  it('should not dispatch login if form is invalid', () => {
    component.loginForm.setValue({ username: '', password: '' });
    component.onSubmit();
    expect(dispatchSpy).not.toHaveBeenCalled();
  });
});