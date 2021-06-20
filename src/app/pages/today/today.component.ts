import { Component, OnInit } from '@angular/core';
import { ForecastService } from 'src/app/shared/services/forecast.service';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss']
})
export class TodayComponent implements OnInit {
  timeline=[];
  weatherNow:any;
  location:any;
  currentTime = new Date();
  constructor(private forecastService: ForecastService) { }
    
  ngOnInit(): void {
      this.forecastService.getWeatherForecast().subscribe(data=>{
          this.getTodayForecast(data)
      })
  }
  dateRange(){
      const start = new Date();
      const to = new Date(start);
      to.setHours(to.getHours()+2,to.getMinutes()+59,to.getSeconds()+59);
    return {start , to}
  }
  getTodayForecast(today:any){
      
      this.location = today.city;
      console.log(today);
      for(const forecast of today.list.slice(0, 8)){
        this.timeline.push({
            time:forecast.dt_txt,
            temp: forecast.main.temp
        });
        const apiDate = new Date(forecast.dt_txt).getTime();

        if(this.dateRange().start.getTime() <= apiDate && this.dateRange().to.getTime() >= apiDate)
        this.weatherNow = forecast;
        console.log(this.weatherNow);
    }

  }
}
