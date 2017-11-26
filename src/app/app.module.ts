import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { AppComponent } from './app.component';
import { SwimlaneTableComponent } from './swimlane-table/swimlane-table.component';
import { CustomTable1Component } from './custom-table1/custom-table1.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    SwimlaneTableComponent,
    CustomTable1Component
  ],
  imports: [
    NgxDatatableModule,
    BrowserModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
