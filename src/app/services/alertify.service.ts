import { Injectable } from '@angular/core';
import { SelectControlValueAccessor } from '@angular/forms';
import * as alertfy from 'alertifyjs'

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

constructor() { }
success(message:string){
  alertfy.success(message);
}
warning(message:string){
  alertfy.warning(message);
}
error(message:string){
  alertfy.error(message);
}




}
