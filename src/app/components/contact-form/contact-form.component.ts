import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NonNullableFormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  contactForm: FormGroup;

  constructor(private fb: NonNullableFormBuilder) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: [''],
      email: ['', [Validators.required, Validators.email]],
      inquiryType: ['', Validators.required],
      contactNumber: [''],
      helpDescription: ['', Validators.required]
    });
  }

  submitForm() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
    }
  }
}
