import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public contactForm: FormGroup = new FormGroup({})

  constructor( private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: ['', [Validators.email, Validators.required]],
      orderId: [''],
      title: ['', [Validators.required]],
      body: ['', Validators.required]
    })
  }

  submit(): void {

  }
}
