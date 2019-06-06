import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";

import { MatTableDataSource } from "@angular/material/table";
import { MachinesService, Machine,MachineDetails } from "../machines.service";
import { Observable } from 'rxjs';

@Component({
  selector: "app-machine-table",
  templateUrl: "./machine-table.component.html",
  styleUrls: ["./machine-table.component.css"]
})
export class MachineTableComponent implements OnInit {
   displayedColumns: string[] = ["Computer Name", "IP Address", "Date"];
  dataSource = [];
  machineInfo$ : Observable<MachineDetails>;
 renderFlag:boolean=false;
 

  constructor(private m: MachinesService) {
    this.m.getAllMachines().subscribe(data => {
      console.log(data);
      this.dataSource=data;

    });
  }

  fetchMachineDetails(id:number){
this.machineInfo$=this.m.getMachineById(id);
this.machineInfo$.subscribe(data=>{
  this.renderFlag=true;
})

  }
  


  
  
   ngOnInit() {
    };
  }


