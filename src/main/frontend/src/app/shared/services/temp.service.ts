import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface MetricsData {
  id: number;
  location: string;
  collector: string;
  metricType: number;
  isSyncronized: boolean;
  value: number;
}

@Injectable({
  providedIn: 'root'
})
export class TempService {

  constructor(private http: HttpClient) { }

  getData(): Observable<MetricsData[]> {
    let url="/api/metrics/by-type/temperature";
    return this.http.get<MetricsData[]>(url);
  }
}
