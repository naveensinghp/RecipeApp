import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { APIResponse,RecipeCategory } from 'src/app/model';
import { ApiBackendService } from 'src/app/services/api-backend.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddrecipeComponent } from '../addrecipe/addrecipe.component';
import { LoginComponent } from '../login/login.component';



@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  addRecipe():void{
    const dialogRef = this.dialog.open(LoginComponent,{
      width: '500px',
    })
  }

}


@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./header.component.css']
})
export class SidebarComponent implements OnInit {
  recipemode: Array<RecipeCategory>
  activeState = 'draft';
  constructor(
    private httpservice:ApiBackendService,
  ) { }

  ngOnInit(): void {
    this.getRecp();
  }
  

   recipecat(type:string){
     this.activeState = type
   }

   getRecp(){
     this.httpservice.getRecipeCategory().subscribe((res:APIResponse<RecipeCategory>) =>{
       this.recipemode = res.response
       console.log(this.recipemode)
    
     })
   }

   ngOnDestroy():void{

   }

}