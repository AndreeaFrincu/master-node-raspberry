import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-card-node',
  templateUrl: './widget-card-node.component.html',
  styleUrls: ['./widget-card-node.component.scss']
})
export class WidgetCardNodeComponent implements OnInit {

  @Input()
  label!: string;

  @Input()
  node_status!: string;

  @Input()
  node_ip!: string;

  @Input()
  cpu!: string;

  @Input()
  memory!: string;

  @Input()
  pods!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
