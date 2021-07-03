import { Component, Input, OnInit } from '@angular/core';
import { AirService } from '../../services/air.service';

@Component({
  selector: 'app-widget-card-air',
  //templateUrl: './widget-card-air.component.html',
  styleUrls: ['./widget-card-air.component.scss'],
  template: `
  <div class="text">
    <div class="refresh">
        <h3>{{ label }}</h3>
        <!-- <button mat-raised-button color="accent">refresh</button> -->
    </div>

    <span class="icon">
      <mat-icon>{{ icon }}</mat-icon>
    </span>
    <h4 *ngFor="let data of air_data; let first = first; let last = last"
    [ngClass]="{ first: first, last: last }">{{ data.value }} ppm</h4>
  </div>
  `
})
export class WidgetCardAirComponent implements OnInit {

  @Input()
  label!: string;

  @Input()
  icon!: string;

  // array with data from api
  air_data: any;

  constructor(private air: AirService) {
    this.air.getData().subscribe(data => {
      console.warn(data);
      this.air_data = data;
    });
  }

  ngOnInit(): void {
  }

}
