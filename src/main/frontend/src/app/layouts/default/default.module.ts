import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';

import { NodesComponent } from 'src/app/modules/nodes/nodes.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AlertsComponent } from 'src/app/modules/alerts/alerts.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    NodesComponent,
    AlertsComponent
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
