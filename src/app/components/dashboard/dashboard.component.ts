import { Component, OnInit } from '@angular/core';
import { ClimeService } from 'src/app/services/clime.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public urlImg: string = 'https://img.freepik.com/vector-gratis/calentamiento-global-sol-ardiente_1308-68797.jpg?w=360';
  public city: string = '';
  public clime: string = '';
  public temp: number = 0;
  public humidity: number = 0;
  public query: boolean = false;
  public loading: boolean = false;
  public showError: boolean = false;

  constructor( private _climeService: ClimeService ) { }

  ngOnInit(): void {
  }

  getWeather() {
    this.query = false;
    this.loading = true;
    this._climeService.getWeather( this.city ).subscribe( weather => {
      this.loading = false;
      this.query = true;
      this.temp = weather.main.temp - 273;
      this.humidity = weather.main.humidity;
      this.clime = weather.weather[0].main;
    }, error => {
      this.loading = false;
      this.getError();
    });
  }
  
  getError() {
    this.showError = true;
    setTimeout(() => {
      this.showError = false;
      this.city = '';
    }, 3000);  
  }
}
