import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface MetricsData {
  id: number;
  collectedAt: string;
  location: string;
  collector: string;
  metricType: number;
  value: number;
}


@Injectable({
  providedIn: 'root'
})
export class TempShService {

  constructor(private http: HttpClient) { }

  getData(): Observable<MetricsData[]> {
    let url="/api/metrics/by-type-and-location/temperature/smarthome";
    return this.http.get<MetricsData[]>(url);
  }
}
