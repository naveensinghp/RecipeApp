import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewAccountUser } from 'src/app/model';
import { ApiBackendService } from 'src/app/services/api-backend.service';
import { GlobalsService } from 'src/app/services/globals.service';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  newuser: NewAccountUser;
  newaccountform: FormGroup;
  forgotpassword: boolean = false;
  createaccount: boolean = false;

  constructor(
    private fb: FormBuilder,
    private httpservice: ApiBackendService,
    public global: GlobalsService,
    public dialog: MatDialog
  ) {
    this.newaccountform = fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
      confirm_password: [null, [Validators.required]],
    });

    //console.log(this.newaccountform);
  }

  ngOnInit(): void {}

  toggleforgetpwd() {
    this.forgotpassword = !this.forgotpassword;
  }

  createnewacc() {
    this.createaccount = !this.createaccount;
  }

  submitForm(formValues: any) {
    this.httpservice.createNewAccount(formValues).subscribe(
      (res) => {
        if (res) {
          this.dialog.closeAll();
          this.global.openSnackBar('Account Created!!', 1);
        }
      },
      (err: any) => {
        console.log('error', err);
        this.global.openSnackBar(err, 1);
      }
    );
  }
}
