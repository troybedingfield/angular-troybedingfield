import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {

  FormData = new FormGroup({
    FullName: new FormControl('', [Validators.required]),
    Email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    Comment: new FormControl('', [Validators.required]),
  });

  constructor(private builder: FormBuilder, private contact: ContactService) { }

  ngOnInit() {
    this.FormData = this.builder.group({
      FullName: new FormControl('', [Validators.required]),
      Email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      Comment: new FormControl('', [Validators.required]),
    })
  }


  onSubmit() {
    // console.log(this.FormData);
    // this.contact.PostMessage(FormData)
    // .subscribe(response => {
    // location.href = 'https://mailthis.to/confirm'
    // console.log(response)
    // }, error => {
    // console.warn(error.responseText)
    // console.log({ error })
    // })
    // TODO: Use EventEmitter with form value
    // console.warn(JSON.stringify(this.FormData.value));
    this.contact.PostMessage(this.FormData.value);
    this.FormData.reset();
  }

}
