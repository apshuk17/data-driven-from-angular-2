import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'dt-data-driven',
  templateUrl: './data-driven.component.html',
  styleUrls: ['./data-driven.component.css']
})
export class DataDrivenComponent {

myForm: FormGroup;
genders: string[] = ['male', 'female'];

constructor() {
    this.myForm = new FormGroup({
    userdata: new FormGroup({
      username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, 
    Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")])
    }),
    password: new FormControl('', Validators.required),
    gender: new FormControl('male', Validators.required)
  });
}

onSubmit() {
  console.log(this.myForm);
}

}
