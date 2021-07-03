import { Component, Input, OnInit} from '@angular/core';
import { TempShService } from '../../services/temp-sh.service';

@Component({
  selector: 'app-widget-card-temp-sh',
  //templateUrl: './widget-card-temp-dc.component.html',
  styleUrls: ['./widget-card-temp-sh.component.scss'],
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
  </div>
  `
})
export class WidgetCardTempShComponent implements OnInit {

  @Input()
  label!: string;

  @Input()
  icon!: string;

  // array with data from api
  temp_data: any;

  constructor(private temp: TempShService) { }

  ngOnInit() {
    this.temp.getData().subscribe(data => {
      console.warn(data);
      this.temp_data = data;
    });
  }

}
