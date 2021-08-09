import { Component } from '@angular/core';
import {LocationService} from "./services/location.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'restourants-demo';

  constructor(private location: LocationService) {
    this.location.setGeoLocation();
  }
}
