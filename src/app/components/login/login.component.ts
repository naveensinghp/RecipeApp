import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  newaccountform: FormGroup
  forgotpassword: boolean = false;
  createaccount: boolean = false;

  constructor(
     private fb: FormBuilder,
  ) {
    this.newaccountform = fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required]],
      })

      //console.log(this.newaccountform);
    }

  ngOnInit(): void {
  }

  toggleforgetpwd(){
    this.forgotpassword = !this.forgotpassword
  }

  createnewacc(){
    this.createaccount =!this.createaccount;
  }

  submitForm(){
    console.log('Test',this.newaccountform);
  }

}
