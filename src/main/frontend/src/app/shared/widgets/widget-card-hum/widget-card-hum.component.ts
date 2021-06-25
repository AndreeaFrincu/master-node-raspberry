import { Component, Input, OnInit } from '@angular/core';
import { HumService } from '../../services/hum.service';

@Component({
  selector: 'app-widget-card-hum',
  //templateUrl: './widget-card-hum.component.html',
  styleUrls: ['./widget-card-hum.component.scss'],
  template: `
  <div class="text">
    <div class="refresh">
        <h3>{{ label }}</h3>
        <!-- <button mat-raised-button color="accent">refresh</button> -->
    </div>

    <span class="icon">
      <mat-icon>{{ icon }}</mat-icon>
    </span>
    <h4 *ngFor="let data of hum_data; let first = first; let last = last" 
    [ngClass]="{ first: first, last: last }">{{ data.value }}%</h4>

    <div class="time">
        <span class="date" *ngFor="let data of hum_data; let first = first; let last = last" 
        [ngClass]="{ first: first, last: last }">{{ data.datee }}</span>
        <span class="time_data" *ngFor="let data of hum_data; let first = first; let last = last" 
        [ngClass]="{ first: first, last: last }">{{ data.timee }}</span>
    </div>
  </div>
  `
})
export class WidgetCardHumComponent implements OnInit {

  @Input()
  label!: string;

  @Input()
  icon!: string;

  // array with data from api
  hum_data: any;

  constructor(private hum: HumService) {
    this.hum.getData().subscribe(data => {
      console.warn(data);
      this.hum_data = data;
    });
  }

  ngOnInit(): void {
  }

}
