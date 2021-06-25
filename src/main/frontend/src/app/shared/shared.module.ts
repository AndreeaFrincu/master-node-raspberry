import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { WidgetAreaTempComponent } from './widgets/widget-area-temp/widget-area-temp.component';
import { WidgetAreaHumComponent } from './widgets/widget-area-hum/widget-area-hum.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { WidgetAreaLightComponent } from './widgets/widget-area-light/widget-area-light.component';
import { WidgetCardTempComponent } from './widgets/widget-card-temp/widget-card-temp.component';
import { WidgetCardControlComponent } from './widgets/widget-card-control/widget-card-control.component';
import { WidgetCardNodeComponent } from './widgets/widget-card-node/widget-card-node.component';
import { WidgetCardAlertComponent } from './widgets/widget-card-alert/widget-card-alert.component';
import { WidgetCardHumComponent } from './widgets/widget-card-hum/widget-card-hum.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    WidgetAreaTempComponent,
    WidgetAreaHumComponent,
    WidgetAreaLightComponent,
    WidgetCardTempComponent,
    WidgetCardControlComponent,
    WidgetCardNodeComponent,
    WidgetCardAlertComponent,
    WidgetCardHumComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule,
    MatSlideToggleModule,
    FlexLayoutModule,
    RouterModule,
    HighchartsChartModule,
    BrowserModule,
    HttpClientModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    WidgetAreaTempComponent,
    WidgetAreaHumComponent,
    WidgetAreaLightComponent,
    WidgetCardTempComponent,
    WidgetCardControlComponent,
    WidgetCardNodeComponent,
    WidgetCardAlertComponent,
    WidgetCardHumComponent
  ],
  providers: [],
})
export class SharedModule { }
