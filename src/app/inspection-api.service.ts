import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InspectionApiService {

readonly inspectionApiUrl = "https://localhost:44321/api";

  constructor(private http:HttpClient) { }

  getInspectionList():Observable<any[]>{
    return this.http.get<any>(this.inspectionApiUrl + '/Inspection');
  }

  addInspection(data:any){
    return this.http.post(this.inspectionApiUrl + '/inspection', data);
  }

  updateInspection(id:number|string,data:any){
  
    return this.http.put(this.inspectionApiUrl + `/inspection/${id}`, data);
  }

  deleteInspection(id:number|string){
    return this.http.delete(this.inspectionApiUrl +  `/inspection/${id}`)
  }

  //Inspection Types
  getInspectionTypesList():Observable<any[]>{
    return this.http.get<any>(this.inspectionApiUrl + '/inspectionTypes');
  }

  addInspectionTypes(data:any){
    return this.http.post(this.inspectionApiUrl + '/inspectionTypes', data);
  }

  updateInspectionTypes(id:number|string,data:any){
  
    return this.http.put(this.inspectionApiUrl + `/inspectionTypes/${id}`, data);
  }

  deleteInspectionTypes(id:number|string){
    return this.http.delete(this.inspectionApiUrl +  `/inspectionTypes/${id}`)
  }

  //Statuses

  getStatusList():Observable<any[]>{
    return this.http.get<any>(this.inspectionApiUrl + '/Status');
  }

  addStatus(data:any){
    return this.http.post(this.inspectionApiUrl + '/Status', data);
  }

  updateStatus(id:number|string,data:any){
  
    return this.http.put(this.inspectionApiUrl + `/Status/${id}`, data);
  }

  deleteStatus(id:number|string){
    return this.http.delete(this.inspectionApiUrl +  `/Status/${id}`)
  }
}
