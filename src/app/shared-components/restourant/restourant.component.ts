import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-restourant',
  templateUrl: './restourant.component.html',
  styleUrls: ['./restourant.component.scss']
})
export class RestourantComponent implements OnInit, OnChanges {

  @Input() restourant: any;
  @Input() userLocation: any;

  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.restourant){
   //   console.log('restourant=>', changes.restourant.currentValue);
      this.restourant = changes.restourant.currentValue;
    }
  }

}
