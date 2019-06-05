import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";

import { MatTableDataSource } from "@angular/material/table";
import { MachinesService, Machine } from "../machines.service";

@Component({
  selector: "app-machine-table",
  templateUrl: "./machine-table.component.html",
  styleUrls: ["./machine-table.component.css"]
})
export class MachineTableComponent implements OnInit {
  displayedColumns: string[] = ["Computer Name", "IP Address", "Date"];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  
  constructor(private m: MachinesService) {
    this.m.getAllMachines().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
     
    });
  }

  ngOnInit() {
    
  }
  

  public selectRow(row) {
    console.log(row.MachineId);
    this.m.getMachineById(row.MachineId).subscribe(data => {
      console.log(data);
    });
  }
}

const ELEMENT_DATA: Machine[] = [];
