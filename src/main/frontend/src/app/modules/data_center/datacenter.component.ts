import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Location } from "@angular/common"

@Component({
  selector: 'app-datacenter',
  templateUrl: './datacenter.component.html',
  styleUrls: ['./datacenter.component.scss']
})
export class DatacenterComponent implements OnInit {

  constructor(private location: Location, private router: Router) { }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
  }

  onReloadRoute() {
    this.router.navigateByUrl("/api/data_center");
  }
}
