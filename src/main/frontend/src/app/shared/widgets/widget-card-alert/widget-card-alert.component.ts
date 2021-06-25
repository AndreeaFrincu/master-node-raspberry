import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-widget-card-alert',
  templateUrl: './widget-card-alert.component.html',
  styleUrls: ['./widget-card-alert.component.scss']
})
export class WidgetCardAlertComponent implements OnInit {

  @Input()
  label!: string;

  @Input()
  state!: string;

  @Input()
  message!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
