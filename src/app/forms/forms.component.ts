import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-forms',
  standalone: true,
  templateUrl: './forms.component.html',
  imports: [ReactiveFormsModule, NgIf,
    FormsModule],
  styleUrl: './forms.component.scss'
})
export class FormsComponent {
  regForm: FormGroup;

  ngModelForm = {
    username: '',
    age: null,
    email: ''
  };

  constructor(private fb: FormBuilder) {
    this.regForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      tel: ['', [
        Validators.required,
        Validators.pattern('^[- +()0-9]+$'),
        Validators.minLength(10)
      ]],
      full_name: ['', [
        Validators.required, 
        Validators.minLength(10), 
        Validators.maxLength(30)
      ]],
      password: ['', [
        Validators.required, 
        Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$')
      ]],
      birthday_data: ['']
    });
  }

  onSubmit() {
    if (this.regForm.valid) {
      console.log('Form submitted:', this.regForm.value);
      this.regForm.reset();
    } else {
      console.log('Form is invalid');
      this.markFormGroupTouched(this.regForm);
    }
  }
  
  onNgModelSubmit() {
    console.log('NgModel form submitted:', this.ngModelForm);
    this.ngModelForm = {
      username: '',
      age: null,
      email: ''
    };
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}