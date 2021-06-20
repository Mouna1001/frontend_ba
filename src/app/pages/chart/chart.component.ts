import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  
  chartdata: any = [];
  year: any = [];
  month:any = [];
  day:any = [];
  

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getDataFromServer();
  }

  getDataFromServer() {
    this.http.get('http://localhost:5000/select')
    .subscribe(res => { 
      let data: any = res['rows']; 
      if (data && data.length > 0) {  
        data.forEach( (item: { year: string; fill_rate: any; }) => {
          if (this.year.indexOf(item.year) == -1) {
            this.year.push(item.year);
          }

          this.chartdata.push({
            ...item,
            ['year'+item.year]: item.fill_rate
          });
        })
        console.log(this.chartdata, this.year);
      }
      // this.chartdata = res;
    })
  } 

  onValueChanged(data: { value: any; } ){
    
    console.log(data.value)
        this.chartdata.filter(['year', '=', data.value]);
        this.chartdata.load();
    }
   }
  

