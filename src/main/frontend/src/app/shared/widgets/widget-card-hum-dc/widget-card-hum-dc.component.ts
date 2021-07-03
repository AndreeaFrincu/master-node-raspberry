import { Component, Input, OnInit } from '@angular/core';
import { Hum_dcService } from '../../services/hum_dc.service';

@Component({
  selector: 'app-widget-card-hum-dc',
  //templateUrl: './widget-card-hum-dc.component.html',
  styleUrls: ['./widget-card-hum-dc.component.scss'],
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
  </div>
  `
})
export class WidgetCardHumDcComponent implements OnInit {

  @Input()
  label!: string;

  @Input()
  icon!: string;

  // array with data from api
  hum_data: any;

  constructor(private hum: Hum_dcService) { }

  ngOnInit() {
    this.hum.getData().subscribe(data => {
      console.warn(data);
      this.hum_data = data;
    });
  }

}
