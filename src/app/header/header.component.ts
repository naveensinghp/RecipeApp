import { Component, OnInit } from '@angular/core';
import { ApiBackendService } from '../services/api-backend.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./header.component.css']
})
export class SidebarComponent implements OnInit {

  activeState = 'Draft';

  public states=[

    { "img":'assets/img/breakfast.png', "type":"Breakfast" },
    { "img":'assets/img/lunch.png', "type":"Lunch" },
    { "img":'assets/img/dinner.png', "type":"Dinner" },
    { "img":'assets/img/snacks.png', "type":"Others" }

   ];
  statess = [
    'Breakfast',
    'Lunch',
    'Noon',
    'Snacks',
    'Others',
  ]

  setStateAsActive(state) {
    this.activeState = state;
  }

  buttonactive: string ='';
  isActive:boolean = false
  recipeCategory: Array<{}> = [
    'Breakfast',
    'Lunch',
    'Noon',
    'Evening Snacks',
    'Dinner',
    'Others'
  ]

  constructor(private _resource : ApiBackendService) { }

  ngOnInit(): void {
    this.getTestingData()
  }
  onClickp(catgeory){
    this.isActive = !this.isActive

  }

  getTestingData(){
    console.log('in',this._resource.getTestData())
  }


}
