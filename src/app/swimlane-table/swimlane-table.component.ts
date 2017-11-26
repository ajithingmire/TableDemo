import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable'  
import '@swimlane/ngx-datatable/release/index.css';
import '@swimlane/ngx-datatable/release/themes/material.css';
import '@swimlane/ngx-datatable/release/assets/icons.css';

import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-swimlane-table',
  templateUrl: './swimlane-table.component.html',
  styleUrls: ['./swimlane-table.component.css']
})

export class SwimlaneTableComponent implements OnInit {
  rows = [];
  temp = [];
  bgcolor;
  
    columns = [
      { prop : 'ccyPair' },
      { name: 'balance' }
    ];
    
    @ViewChild(DatatableComponent) table: DatatableComponent;
    constructor() {
      this.fetch((data) => {
         // cache our list
      this.temp = [...data];      
            // push our inital complete list
            this.rows = data;
        // this.rows = data;
      });
    }
  
    fetch(cb) {
      const req = new XMLHttpRequest();
      req.open('GET', `./../assets/countryCCYPair.json`);      
      req.onload = () => {
        const data = JSON.parse(req.response);
        cb(data);
      };  
      req.send();
    }

    updateFilter(event) {
      const val = event.target.value.toLowerCase();
      // filter our data     
      const temp = this.temp.filter(function(d) {
        return d.ccyPair.toLowerCase().indexOf(val) !== -1 || !val;
      });
      // update the rows
      this.rows = temp;
      // Whenever the filter changes, always go back to the first page
      this.table.offset = 0;
    }

    // getRowHeight(row) {
    //   if(!row) return 50;
    //   if(row.height === undefined) return 50;
    //   return row.height;
    // }

    ngOnInit() {
      this.bgcolor = "red"
  }


}
