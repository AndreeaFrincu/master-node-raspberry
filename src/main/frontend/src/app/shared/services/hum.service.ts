import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface MetricsData {
  id: number;
  collectedAt: string;
  location: string;
  collector: string;
  metricType: number;
  isSynchronized: boolean;
  value: number;
}

@Injectable({
  providedIn: 'root'
})
export class HumService {

  constructor(private http: HttpClient) { }

  getData(): Observable<MetricsData[]> {
    let url="/api/metrics/by-type/humidity";
    return this.http.get<MetricsData[]>(url);
  }
}
