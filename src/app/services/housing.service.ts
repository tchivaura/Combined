import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, retry } from 'rxjs';
import { IProperty } from '../property/IProperty,interface';

@Injectable({
  providedIn: 'root'
})


export class HousingService {

constructor(private http:HttpClient) { }
getAllproperties(SellRent :number) :Observable<IProperty[]>{
   return this.http.get('data/properties.json').pipe(
    map(data=>{
      const propertiesArray :Array<IProperty>=[];

      for(const id in data){
        if (data.hasOwnProperty(id) && (data[id as keyof object] as any).SellRent === SellRent) {
          propertiesArray.push(data[id as keyof object]);
        }
      }
      return propertiesArray
    }
   )
   )
}

}
