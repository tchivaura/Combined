import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IProperty } from '../IProperty,interface';


@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

  constructor(private  fb : FormBuilder,private router:Router) { }
  @ViewChild('formTabs') formTabs?: TabsetComponent;
  propertyTypes :Array<string>=['House','Apartment','Duplex'];
  furnishTypes : Array<string>=['Fully','Semi','Unfurnished'];

  addPropertyForm : FormGroup | any

  propertyView : IProperty={
    Id :null,
    Name:'',
    Price:null,
    SellRent:null,
    Type:null,
    Description:null,
    Ftype: null,
    BHK: null,
    BuiltArea:null,
    RTM:null
    



  }
  
  selectTab(NexttabId: number, IsCurrentTabValid : boolean) {
    if(IsCurrentTabValid){
      this.formTabs.tabs[NexttabId].active=true
    }
  }
  ngOnInit() {
    this.createFormProperty()
  }
  createFormProperty(){
    this.addPropertyForm= this.fb.group({
      basicInfo :this.fb.group({
        SellRent:[null,Validators.required],
      Type:[null,Validators.required],
      Name:[null,Validators.required],
     
      }),
      PriceInfo:this.fb.group(
        {Price:[null,Validators.required],
        BuiltArea:[null,Validators.required],
        Security:[null,Validators.required],
        Maintenance:[null,Validators.required],
        Carpet:[null,Validators.required],

      })
      
      
    })
  }
  onBack(){
    this.router.navigate(['/'])
  }
  onSubmit(){
    //console.log('here',this.addPropertyForm)
  }
  getbasicInfo(){
    return  this.addPropertyForm.controls.basicInfo as FormGroup
  }
  getSellRent(){
    return this.getbasicInfo().get('SellRent') as FormControl;
  }

  getBuyRent(){
    return this.addPropertyForm.controls.basicInfo as FormGroup
  }
}
