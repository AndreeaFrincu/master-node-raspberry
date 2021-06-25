import { Component, Input, OnInit} from '@angular/core';
import { TempService } from '../../services/temp.service';

@Component({
  selector: 'app-widget-card-temp',
  //templateUrl: './widget-card-temp.component.html',
  styleUrls: ['./widget-card-temp.component.scss'],
  template: `
  <div class="text">
    <div class="refresh">
        <h3>{{ label }}</h3>
        <!-- <button mat-raised-button color="accent">refresh</button> -->
    </div>

    <span class="icon">
      <mat-icon>{{ icon }}</mat-icon>
    </span>
    <h4 *ngFor="let data of temp_data; let first = first; let last = last"
    [ngClass]="{ first: first, last: last }">{{ data.value }}°C</h4>

    <div class="time">
        <span class="date" *ngFor="let data of temp_data; let first = first; let last = last"
        [ngClass]="{ first: first, last: last }">{{ data.datee }}</span>
        <span class="time_data" *ngFor="let data of temp_data; let first = first; let last = last"
        [ngClass]="{ first: first, last: last }">{{ data.timee }}</span>
    </div>
  </div>
  `
})
export class WidgetCardTempComponent implements OnInit {

  @Input()
  label!: string;

  @Input()
  icon!: string;

  // array with data from api
  temp_data: any;

  constructor(private temp: TempService) { }

  ngOnInit() {
    this.temp.getData().subscribe(data => {
      console.warn(data);
      this.temp_data = data;
    });
  }

}
