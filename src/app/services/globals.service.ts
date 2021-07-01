import { Injectable } from '@angular/core';
import {MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class GlobalsService {

  constructor(
    public snackBar: MatSnackBar
  ) { }

  openSnackBar(message,type=1,action="DISMISS"){
    var panelClass = '';
    if(type==1){
      panelClass='success';
    }
    if(type==2){
      panelClass='error';
    }
    if(type==3){
      panelClass='info';
    }

    this.snackBar.open(message,action,{
      duration:10500,
      panelClass : panelClass
    });

  }
}
