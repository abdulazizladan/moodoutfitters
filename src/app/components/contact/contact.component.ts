import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MailService } from 'src/app/services/mail.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public contactForm: FormGroup = new FormGroup({})

  constructor( private fb: FormBuilder, private mailService: MailService ){

  }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: [''],
      EmailAddress: ['', [Validators.email, Validators.required]],
      orderId: [''],
      Subject: ['', [Validators.required]],
      Body: ['', Validators.required]
    })
  }

  submit(): void {
    const formData = this.contactForm.value;
    console.log(formData)
    this.mailService.sendMail('formData').subscribe(
      response => {
        location.href = 'https://mailthis.to/confirm'
        console.log(response)
      },
      error => {
        console.warn(error.responseText)
        console.log(error)
      }
    )
  }
}
