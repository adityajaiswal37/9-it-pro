import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContactFormComponent } from "../contact-form/contact-form.component";

@Component({
  selector: 'app-contact-us',
  imports: [RouterLink, ContactFormComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {

}
