import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor() {
  }

  private geoLocation = new Subject<any>();
  geoLocation$ = this.geoLocation.asObservable();
  setGeoLocation() {
    navigator.geolocation.getCurrentPosition(resp => {
        this.geoLocation.next({lng: resp.coords.longitude, lat: resp.coords.latitude});
      },
      err => {
        this.geoLocation.next({lng: 27.142826, lat: 38.423733})
      });
  }
}
