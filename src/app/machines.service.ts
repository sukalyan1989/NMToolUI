import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MachinesService {

  constructor(private http: HttpClient) { 
    
  }
 public getAllMachines():Observable<any>{

   return this.http.get("http://localhost:64689/api/Machine",{
    headers: new HttpHeaders({
      Accept: "application/json;odata=verbose",

    })
  }).pipe(map(n =>{ return n;}))
  }

  public getMachineById( id:number):Observable<Object>{

    return this.http.get("http://localhost:64689/api/MachineDetails/"+id,{
    headers: new HttpHeaders({
      Accept: "application/json;odata=verbose",
    })
  }).pipe(map(n =>{ return n;}))

  }
}
export interface Machine {
AdminName: string,
Architecture: string,
CPUName: string,
ComputerName: string,
Date:string
Domain: string
HDDFreeSpace:string
HDDSize: string
IPAddress: string
LoggedInUser: string
MachineId: number
OSBuildVersion: string
OperatingSystem: string
RAMCapacity: string
RAMManufacturer: string
Time: string
}
