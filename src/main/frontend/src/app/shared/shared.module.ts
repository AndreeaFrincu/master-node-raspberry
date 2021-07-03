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
import { WidgetAreaTempShComponent } from './widgets/widget-area-temp-sh/widget-area-temp-sh.component';
import { WidgetAreaTempDcComponent } from './widgets/widget-area-temp-dc/widget-area-temp-dc.component';
import { WidgetAreaHumDcComponent } from './widgets/widget-area-hum-dc/widget-area-hum-dc.component';
import { WidgetAreaHumShComponent } from './widgets/widget-area-hum-sh/widget-area-hum-sh.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { WidgetAreaLightComponent } from './widgets/widget-area-light/widget-area-light.component';
import { WidgetCardTempDcComponent } from './widgets/widget-card-temp-dc/widget-card-temp-dc.component';
import { WidgetCardTempShComponent } from './widgets/widget-card-temp-sh/widget-card-temp-sh.component';
import { WidgetCardHumDcComponent } from './widgets/widget-card-hum-dc/widget-card-hum-dc.component';
import { WidgetCardHumShComponent } from './widgets/widget-card-hum-sh/widget-card-hum-sh.component';
import { WidgetAreaAirComponent } from './widgets/widget-area-air/widget-area-air.component';
import { WidgetCardAirComponent } from './widgets/widget-card-air/widget-card-air.component';
import {WidgetCardLightComponent} from "./widgets/widget-card-light/widget-card-light.component";

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    WidgetAreaTempShComponent,
    WidgetAreaTempDcComponent,
    WidgetAreaHumDcComponent,
    WidgetAreaHumShComponent,
    WidgetAreaLightComponent,
    WidgetCardTempDcComponent,
    WidgetCardTempShComponent,
    WidgetCardHumDcComponent,
    WidgetCardHumShComponent,
    WidgetAreaAirComponent,
    WidgetCardAirComponent,
    WidgetCardLightComponent
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
    WidgetAreaTempShComponent,
    WidgetAreaTempDcComponent,
    WidgetAreaHumDcComponent,
    WidgetAreaHumShComponent,
    WidgetAreaLightComponent,
    WidgetCardTempDcComponent,
    WidgetCardTempShComponent,
    WidgetCardHumDcComponent,
    WidgetCardHumShComponent,
    WidgetAreaAirComponent,
    WidgetCardAirComponent,
    WidgetCardLightComponent
  ],
  providers: [],
})
export class SharedModule { }
