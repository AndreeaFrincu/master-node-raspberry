import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { AirService, MetricsData } from '../../services/air.service';

@Component({
  selector: 'app-widget-area-air',
  templateUrl: './widget-area-air.component.html',
  styleUrls: ['./widget-area-air.component.scss']
})
export class WidgetAreaAirComponent implements OnInit {

  chartOptions!: {};
  Highcharts = Highcharts;

  // array with data from api
  air_data: MetricsData[] = [];

  // arrays for xAxis and yAxis to store data from API
  x_axis_label: string[] = [];
  y_axis_label: number[] = [];


  // empty arrays for xAxis and yAxis to store nothing before fetching data from API
  initializeCategory: string[] = [];
  initializeData: number[] = [];

  // initialize the arrays for xAxis and yAxis with null before fetching data from API
  constructor(private air: AirService) {
    this.setConfig(this.initializeCategory, this.initializeData);
  }

  setConfig(xAxisCategory: string[], yAxisData: number[]) {
    this.chartOptions = {
      chart: {
        type: 'area'
      },
      title: {
        text: 'Air Quality'
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
          text: 'Parts Per Million'
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
        name: 'sensor air quality',
        data: yAxisData
      }]
    };
  }

  ngOnInit() {
    this.air.getData().subscribe(data => {
      console.warn(data);
      this.air_data = data;

      this.x_axis_label = this.air_data.map(i => i.collectedAt);
      console.log(this.x_axis_label);

      this.y_axis_label = this.air_data.map(i => i.value);
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
