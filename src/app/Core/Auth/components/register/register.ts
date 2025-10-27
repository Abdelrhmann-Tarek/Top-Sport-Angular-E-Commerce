import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  standalone:true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register implements OnInit {
  registerForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createRegisterForm();
  }

  // ✅ Create the form with controls and custom validator
  createRegisterForm(): void {
    this.registerForm = this.fb.group(
      {
        name: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required]
      },
      { validator: this.passwordMatchValidator } // ✅ custom validator here
    );
  }

  // ✅ Custom Password Match Validator
  passwordMatchValidator(formGroup: AbstractControl): { [key: string]: any } | null {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  // ✅ Easy access to form fields (for template)
  get f() {
    return this.registerForm.controls;
  }

  // ✅ Form submit handler
  onSubmit(): void {
    this.submitted = true;
      console.log('Submit clicked!'); // <== MUST see this in console


    if (this.registerForm.invalid) {
      return;
    }

    console.log('Form Submitted:', this.registerForm.value);
    alert('Registration Successful!');
    this.registerForm.reset();
    this.submitted = false;
  }
}