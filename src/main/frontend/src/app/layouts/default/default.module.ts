import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';

import { DatacenterComponent } from 'src/app/modules/data_center/datacenter.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { OverviewComponent } from 'src/app/modules/overview/overview.component';
import { SmartbuildingComponent } from 'src/app/modules/smart_building/smartbuilding.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    DefaultComponent,
    SmartbuildingComponent,
    DatacenterComponent,
    OverviewComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    MatTabsModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class DefaultModule { }
