import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, observable, Observable } from 'rxjs';
import { Package } from '../models/package';


@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(private http:HttpClient) { }

  fetchAllPackages():Observable<Package[]>{
    return this.http
    .get<Package[]>('/assets/asset/json/hotels.json')
    // .pipe(
    //   map(packages=>{
    //     return packages.map((pkg,index) =>{
    //       pkg.id="pkg-"+ index;
    //       return pkg;
    //     })
    //   }));

    
    // .pipe(
    //   map(packages=>{
    //     return packages.map((pkg,index)=>{
    //       pkg.id="pkg"+index;
    //       return pkg;
    //     })
    //   })
    //)
  }

  fetchPackageDetail(id:string):Observable<Package | null> {
    return this.fetchAllPackages()
    .pipe(
      map(result=>result.filter(item => item.id===id)),
      map(result=>result.length > 0 ? result[0]:null)
    )
  
  }
}






