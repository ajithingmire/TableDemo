import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable'  
import '@swimlane/ngx-datatable/release/index.css';
import '@swimlane/ngx-datatable/release/themes/material.css';
import '@swimlane/ngx-datatable/release/assets/icons.css';


@Component({
  selector: 'app-custom-table1',
  templateUrl: './custom-table1.component.html',
  styleUrls: ['./custom-table1.component.css']
})
export class CustomTable1Component implements OnInit {
  rows = [];
  temp = [];
  
  @Input()
  tabelNumber

  columns = [
      { prop : 'ccyPair' },
      { name: 'balance' }
    ];
    
    @ViewChild(DatatableComponent) table: DatatableComponent;
    // @ViewChild(DataTableFooterComponent) footer: DataTableFooterComponent;

    constructor() {
      
      this.fetch((data) => {
         // cache our list
      this.temp = [...data];      
            // push our inital complete list
            this.rows = data;
       
      });
      
      this.getRowClass = this.getRowClass.bind(this)
     
        
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

    getRowClass(row) {
      let rowNum : number = this.rows.indexOf(row);
      console.log(this.rows.indexOf(row))
      if((rowNum % 2) > 0 )
      {        
        return "oddRowTable"  +  this.tabelNumber
      }
      else{
           return "evenRowTable" + this.tabelNumber
      }

     
    }

    
  
    getCellClass({ row, column, value }): any {

      return {
        'is-female': value === 'female'
      };
    }

    ngOnInit() {
        
  }


}

