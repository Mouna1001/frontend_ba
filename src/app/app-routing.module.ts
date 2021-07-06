import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './shared/services';
import { DxDataGridModule, DxFormModule } from 'devextreme-angular';
import { DxChartModule, DxSelectBoxModule } from 'devextreme-angular';
import { BarragesComponent } from './pages/barrages/barrages.component';
import { ChartComponent } from './pages/chart/chart.component';
import { Chart2Component } from './pages/chart2/chart2.component';
import { Chart3Component } from './pages/chart3/chart3.component';
import { LineComponent } from './pages/Linechart/line.component';
import { TodayComponent } from './pages/today/today.component';
import { PivotComponent } from './pages/pivot/pivot.component';

const routes: Routes = [
 
  
  
  {
    path: 'barrages',
    component: BarragesComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'chart',
    component: ChartComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'Linechart',
    component: LineComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'today',
    component: TodayComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'pivot',
    component: PivotComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'chart2',
    component: Chart2Component,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'chart3',
    component: Chart3Component,
    canActivate: [ AuthGuardService ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true }), DxDataGridModule, DxFormModule,DxSelectBoxModule,DxChartModule],
  providers: [AuthGuardService],
  exports: [RouterModule],
 
})
export class AppRoutingModule { }
