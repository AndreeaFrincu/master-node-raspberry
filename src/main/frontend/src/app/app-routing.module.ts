import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { AlertsComponent } from './modules/alerts/alerts.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { NodesComponent } from './modules/nodes/nodes.component';

const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: DashboardComponent
  },
  {
    path: 'nodes',
    component: NodesComponent
  },
  {
    path: 'alerts',
    component: AlertsComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
