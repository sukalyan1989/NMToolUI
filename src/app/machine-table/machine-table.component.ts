import { Component, OnInit, ViewChild, AfterViewInit,OnDestroy } from "@angular/core";

import { MatTableDataSource } from "@angular/material/table";
import { MachinesService, Machine,MachineDetails, SoftwareVersion, Patches ,Users,Admins} from "../machines.service";
import { Observable } from 'rxjs';

@Component({
  selector: "app-machine-table",
  templateUrl: "./machine-table.component.html",
  styleUrls: ["./machine-table.component.css"]
})
export class MachineTableComponent implements OnInit,OnDestroy {
   displayedColumns: string[] = ["Computer Name", "IP Address", "Date"];
  dataSource = [];
  machineInfo$ : Observable<MachineDetails>;
 renderFlag:boolean=false;
 machineInfo:Machine;
 softwareInfo:SoftwareVersion[];
 patchesInfo:Patches[];
 usersInfo:Users[];
 adminsInfo:Admins[];

  constructor(private m: MachinesService) {
    this.m.getAllMachines().subscribe(data => {
      console.log(data);
      this.dataSource=data;

    });
  }

  fetchMachineDetails(id:number){
this.machineInfo$=this.m.getMachineById(id);
this.machineInfo$.subscribe(data=>{
  this.machineInfo=data.Machine;
  this.softwareInfo=[...data.SoftwareVersion];
  this.patchesInfo=[...data.Patches];
  this.adminsInfo=[...data.Admins];
  this.usersInfo=[...data.Users];
  this.renderFlag=true;
  
})

  }
   
   ngOnInit() {
    };
    ngOnDestroy(){
      this.renderFlag=false;
    }
  }


