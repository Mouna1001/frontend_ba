import {  OnInit } from '@angular/core';
import { NgModule, Component, enableProdMode, ChangeDetectionStrategy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ViewChild, AfterViewInit,  } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxPivotGridModule,
         DxPivotGridComponent,
         DxChartModule,
         DxChartComponent } from 'devextreme-angular';
import DataSource from 'devextreme/data/data_source';
import ArrayStore from 'devextreme/data/array_store';



if(!/localhost/.test(document.location.host)) {
  enableProdMode();
}
@Component({
  selector: 'app-pivot',
  templateUrl: './pivot.component.html',
  styleUrls: ['./pivot.component.scss']
})

export class PivotComponent implements OnInit {
  @ViewChild(DxPivotGridComponent, { static: false }) pivotGrid: DxPivotGridComponent;
  @ViewChild(DxChartComponent, { static: false }) chart: DxChartComponent;

  Pivotdata: any;
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getDataFromServer();
  }

  getDataFromServer() {
    this.http.get('http://localhost:5000/select')
    .subscribe(res => {
      let data: any = res['rows']; 
      
      this.Pivotdata = res;
      
    
    })
  } 
}