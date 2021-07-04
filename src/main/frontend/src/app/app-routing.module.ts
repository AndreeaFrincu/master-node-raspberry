import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { OverviewComponent } from './modules/overview/overview.component';
import { SmartbuildingComponent } from './modules/smart_building/smartbuilding.component';
import { DatacenterComponent } from './modules/data_center/datacenter.component';

const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: OverviewComponent
  },
    {
      path: 'smart_building',
      component: SmartbuildingComponent
    },
    {
      path: 'data_center',
      component: DatacenterComponent
    }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
