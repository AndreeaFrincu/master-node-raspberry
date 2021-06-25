import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import {MetricsData, LumService} from "../../services/lum.service";

@Component({
  selector: 'app-widget-area-light',
  templateUrl: './widget-area-light.component.html',
  styleUrls: ['./widget-area-light.component.scss']
})
export class WidgetAreaLightComponent implements OnInit {

  chartOptions!: {};
  Highcharts = Highcharts;

  // array with data from api
  lum_data: MetricsData[] = [];

  // arrays for xAxis and yAxis to store data from API
  x_axis_label: number[] = [];
  y_axis_label: number[] = [];

  // empty arrays for xAxis and yAxis to store nothing before fetching data from API
  initializeCategory: number[] = [];
  initializeData: number[] = [];

  constructor(private hum: LumService) {
    this.setConfig(this.initializeCategory, this.initializeData);
  }

  setConfig(xAxisCategory: number[], yAxisData: number[]) {
    this.chartOptions = {
      chart: {
        type: 'area'
      },
      title: {
        text: 'Luminous Intensity'
      },
      legend: {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: 100,
        y: 70,
        floating: true,
        borderWidth: 1,
        backgroundColor: '#FFFFFF'
      },
      xAxis: {
        categories: xAxisCategory
      },
      yAxis: {
        title: {
          text: 'Lux'
        }
      },
      plotOptions: {
        area: {
          fillOpacity: 0.5
        }
      },
      credits: {
        enabled: false
      },
      colors: ['#00b0ff'],
      series: [{
        name: 'sensor luminosity',
        data: yAxisData
      }]
    };
  }

  ngOnInit() {
    this.hum.getData().subscribe(data => {
      console.warn(data);
      this.lum_data = data;

      this.x_axis_label = this.lum_data.map(i => i.id);
      console.log(this.x_axis_label);

      this.y_axis_label = this.lum_data.map(i => i.value);
      console.log(this.y_axis_label);

      this.setConfig(this.x_axis_label, this.y_axis_label);
    });


    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

}
