import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from 'src/app/services/housing.service';
import { IProperty } from '../IProperty,interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit  {
  SellRent =1
    properties: Array<IProperty> | any;

  constructor(private housingService: HousingService,private route :ActivatedRoute) { }

  ngOnInit() {
    if(this.route.snapshot.url.toString()){
      this.SellRent=2
    }
    this.housingService.getAllproperties(this.SellRent).subscribe(
       data=>{
        this.properties=data;
        console.log(data);
        console.log(this.route.snapshot.url.toString());
       } ,error=>{
        console.log('httperror:');
        console.log(error)

       }
    )
    }
    
    
  }

