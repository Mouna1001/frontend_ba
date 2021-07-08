import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SideNavOuterToolbarModule, SideNavInnerToolbarModule, SingleCardModule } from './layouts';
import { FooterModule} from './shared/components';
import { AuthService, ScreenService, AppInfoService } from './shared/services';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppRoutingModule } from './app-routing.module';
import { BarragesComponent } from './pages/barrages/barrages.component';
import { HttpClientModule } from '@angular/common/http';
import { DxDataGridModule } from 'devextreme-angular';
import { DxChartModule,DxSelectBoxModule} from 'devextreme-angular';
import { ChartComponent } from './pages/chart/chart.component';
import { LineComponent } from './pages/Linechart/line.component';
import { FutureComponent } from './pages/future/future.component';
import { TodayComponent } from './pages/today/today.component';
import { PivotComponent } from './pages/pivot/pivot.component';
import { DxPivotGridModule,DxCheckBoxModule, DxButtonModule } from 'devextreme-angular';
import { Chart2Component } from './pages/chart2/chart2.component';
import { Chart3Component } from './pages/chart3/chart3.component';

@NgModule({
  declarations: [
    AppComponent,
    BarragesComponent,
    ChartComponent,
    LineComponent,
    TodayComponent,
    FutureComponent,
    PivotComponent,
    Chart2Component,
    Chart3Component
  ],
  imports: [
    BrowserModule,
    SideNavOuterToolbarModule,
    SideNavInnerToolbarModule,
    SingleCardModule,
    FooterModule,
    HttpClientModule,
    DxDataGridModule,
    DxChartModule,
    DxSelectBoxModule,
    AppRoutingModule,
    BrowserModule,
    DxPivotGridModule,
    DxCheckBoxModule,
    DxButtonModule
    
    
  ],
  providers: [AuthService, ScreenService, AppInfoService],
  bootstrap: [AppComponent],
  
    
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);