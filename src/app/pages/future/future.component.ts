import { Component, OnInit } from '@angular/core';
import { pluck } from 'rxjs/operators';
import { ForecastService } from 'src/app/shared/services';

@Component({
  selector: 'app-future',
  templateUrl: './future.component.html',
  styleUrls: ['./future.component.scss']
})
export class FutureComponent implements OnInit {
weatherData:any=[];
  constructor(private forecastService: ForecastService) { }

  ngOnInit(): void {
    this.forecastService.getWeatherForecast().pipe(
     pluck('list')
    )
    .subscribe(data=>{
        this.futureForecast(data)
    })
  }
  futureForecast(date:any){
    for(let i=0;i<date.length; i=1+8){
      this.weatherData.push(date[i]);

    }
  }
}
