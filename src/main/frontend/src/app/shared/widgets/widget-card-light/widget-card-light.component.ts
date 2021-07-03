import {Component, Input, OnInit} from '@angular/core';
import {LumService} from "../../services/lum.service";

@Component({
  selector: 'app-widget-card-light',
  //templateUrl: './widget-card-hum-dc.component.html',
  styleUrls: ['./widget-card-light.component.scss'],
  template: `
  <div class="text">
    <div class="refresh">
        <h3>{{ label }}</h3>
        <!-- <button mat-raised-button color="accent">refresh</button> -->
    </div>

    <span class="icon">
      <mat-icon>{{ icon }}</mat-icon>
    </span>
    <h4 *ngFor="let data of lum_data; let first = first; let last = last"
    [ngClass]="{ first: first, last: last }">{{ data.value }} lux</h4>
  </div>
  `
})
export class WidgetCardLightComponent implements OnInit {

  @Input()
  label!: string;

  @Input()
  icon!: string;

  // array with data from api
  lum_data: any;

  constructor(private lum: LumService) { }

  ngOnInit() {
    this.lum.getData().subscribe(data => {
      console.warn(data);
      this.lum_data = data;
    });
  }

}
