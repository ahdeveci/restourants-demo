import {AfterViewInit, ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {LocationService} from "../services/location.service";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  public userLocation: any;
  private endPoint = environment.apiEndPoint;
  public restourantList = [];
  public stopped = false;
  private LIMIT = 100;
  private skip = 0;
  public searchRestourant: any = {title: ''};

  constructor(private locationService: LocationService,
              private httpClient: HttpClient) {
    this.locationService.geoLocation$.subscribe(location => {
      console.log('location=>', location);
      this.userLocation = location;
      this.getData(this.userLocation, this.LIMIT, this.skip);
    }, error => {
      console.error(error);
    })
  }

  ngOnInit(): void {
  }

  getData(location: any, limit: number, skip: number) {
    this.httpClient.post(this.endPoint, {
      skip,
      limit,
      "latitude": location.lat,
      "longitude": location.lng
    }).subscribe((data: any) => {
      console.log(data.response.length);
      if (data.response) {
        this.restourantList = this.restourantList.concat(data.response);
      } else {
        console.log('no restourant found');
        this.stopped = true;
      }
    }, error => {
      console.error(error);
    });
  }

  onScroll(e: any) {
    console.log('e=>', e);
    if (!this.stopped) {
      this.skip += this.LIMIT;
      this.getData(this.userLocation, this.LIMIT, this.skip);
    }
  }

}
