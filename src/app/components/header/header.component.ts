import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}


@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./header.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public states=[

    { "img":'assets/img/breakfast.png', "type":"Breakfast" },
    { "img":'assets/img/lunch.png', "type":"Lunch" },
    { "img":'assets/img/dinner.png', "type":"Dinner" },
    { "img":'assets/img/snacks.png', "type":"Others" }

   ];

}