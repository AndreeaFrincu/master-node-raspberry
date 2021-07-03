import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { MetricsData } from '../../services/temp-sh.service';
import { TempShService } from '../../services/temp-sh.service';

@Component({
  selector: 'app-widget-area-temp-sh',
  templateUrl: './widget-area-temp-sh.component.html',
  styleUrls: ['./widget-area-temp-sh.component.scss']
})
export class WidgetAreaTempShComponent implements OnInit {

  chartOptions!: {};
  Highcharts = Highcharts;

  // array with data from api
  temp_data: MetricsData[] = [];

  // arrays for xAxis and yAxis to store data from API
  x_axis_label: string[] = [];
  y_axis_label: number[] = [];

  // empty arrays for xAxis and yAxis to store nothing before fetching data from API
  initializeCategory: string[] = [];
  initializeData: number[] = [];

  constructor(private hum: TempShService) {
    this.setConfig(this.initializeCategory, this.initializeData);
  }

  setConfig(xAxisCategory: string[], yAxisData: number[]) {
    this.chartOptions = {
      chart: {
        type: 'area'
      },
      title: {
        text: 'Temperature'
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
          text: 'Celsius'
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
      colors: ['#5e35b1'],
      series: [{
        name: 'sensor temperature',
        data: yAxisData
      }]
    };
  }

  ngOnInit() {
    this.hum.getData().subscribe(data => {
      console.warn(data);
      this.temp_data = data;

      this.x_axis_label = this.temp_data.map(i => i.collectedAt);
      console.log(this.x_axis_label);

      this.y_axis_label = this.temp_data.map(i => i.value);
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
