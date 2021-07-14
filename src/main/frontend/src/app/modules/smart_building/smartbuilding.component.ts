import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Location } from "@angular/common"

@Component({
  selector: 'app-smartbuilding',
  templateUrl: './smartbuilding.component.html',
  styleUrls: ['./smartbuilding.component.scss']
})

export class SmartbuildingComponent implements OnInit {

  constructor(private location: Location, private router: Router) { }

  ngOnInit() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
  }

  onReloadRoute() {
    this.router.navigateByUrl("/api/smart_building");
  }
}
