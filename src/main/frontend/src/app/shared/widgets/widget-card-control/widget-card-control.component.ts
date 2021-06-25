import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-widget-card-control',
  templateUrl: './widget-card-control.component.html',
  styleUrls: ['./widget-card-control.component.scss']
})
export class WidgetCardControlComponent implements OnInit {

  @Input()
  label!: string;

  @Input()
  icon!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
