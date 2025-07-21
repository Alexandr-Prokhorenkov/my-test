import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SvgIconComponent } from '@shared/index';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SvgIconComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent {
  public isPasswordVisible = signal<boolean>(false);

  public form = new FormGroup({
    username: new FormControl<string | null>(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern(/^[a-zA-Z0-9_]+$/),
    ]),
    password: new FormControl<string | null>(null, [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(20),
      Validators.pattern(/^[a-zA-Z0-9_]+$/),
    ]),
  });

  public onSubmit(event: Event): void {
    event.preventDefault();

    if (this.form.valid) {
      const payload = {
        username: this.form.value.username || '',
        password: this.form.value.password || '',
      };
      // eslint-disable-next-line no-console
      console.log(payload);
    }
  }

  public togglePasswordVisibility(): void {
    this.isPasswordVisible.set(!this.isPasswordVisible());
  }

  public get usernameError(): string | null {
    const control = this.usernameControl;
    if (control.touched || control.dirty) {
      if (control.hasError('required')) return 'Имя обязательно';
      if (control.hasError('minlength')) return 'Имя должно содержать минимум 3 символа';
      if (control.hasError('maxlength')) return 'Имя должно содержать максимум 20 символов';
      if (control.hasError('pattern'))
        return 'Допустимы только латинские буквы, цифры и подчёркивания';
    }
    return null;
  }

  public get passwordError(): string | null {
    const control = this.passwordControl;
    if (control.touched || control.dirty) {
      if (control.hasError('required')) return 'Пароль обязателен';
      if (control.hasError('minlength')) return 'Пароль должен быть не короче 6 символов';
      if (control.hasError('maxlength')) return 'Пароль должен быть не длиннее 20 символов';
      if (control.hasError('pattern'))
        return 'Пароль может содержать только латинские буквы, цифры и подчёркивания';
    }
    return null;
  }

  public get passwordVisible(): boolean {
    return this.isPasswordVisible();
  }

  public get usernameControl(): FormControl<string | null> {
    return this.form.get('username') as FormControl;
  }

  public get passwordControl(): FormControl<string | null> {
    return this.form.get('password') as FormControl;
  }
}
