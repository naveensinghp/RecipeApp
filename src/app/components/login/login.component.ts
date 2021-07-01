import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms'
import { ApiBackendService } from 'src/app/services/api-backend.service';
import { NewAccountUser } from '.././model';




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
     private httpservice:ApiBackendService,
  ) {
    this.newaccountform = fb.group({
       name: [null, [Validators.required]],
       email: [null, [Validators.required,Validators.email]],
       password: [null, [Validators.required]],
       confirm_password: [null, [Validators.required]],

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

  submitForm(formValues: any){
    console.log(this.newaccountform);
    // console.log('formval',formValues)
    this.httpservice.createNewAccount(formValues)
      .subscribe(
        (data: NewAccountUser) => console.log(data),
        (err: any) => console.log(err)
      );
  }

  // async submitForm(){
  //
  //   try{
  //
  //   }catch(error){
  //     console.error(error)
  //   }
  // }

}
