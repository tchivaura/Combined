import { Component, Input, OnInit } from '@angular/core';
import { IProperty } from '../IProperty,interface';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {

  constructor()
   { }
   @Input() property :IProperty |any
 
  ngOnInit() {

    
  }

}
