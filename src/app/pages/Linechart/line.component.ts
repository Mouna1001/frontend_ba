import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-barrages',
    templateUrl: './line.component.html',
    styleUrls: ['./line.component.scss'],
    preserveWhitespaces: true
})

export class LineComponent implements OnInit{
    
    lineData: any;
   
    constructor( public http: HttpClient) {
    
}
    
ngOnInit(): void {
    this.getDataFromServer();
}

getDataFromServer() {
  this.http.get('http://localhost:5000/route')
  .subscribe(res => {
    this.lineData = res;
  })
}

}
/*onValueChanged(data: { value: any; }) {
    this.lineData.filter(['date', '=', data.value]);
    this.lineData.load();
    this.lineData.filter(['name', '=', data.value]);
    this.lineData.load();
}*/



