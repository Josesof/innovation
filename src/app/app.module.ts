import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import localePy from '@angular/common/locales/es-PY';
registerLocaleData(localePy, 'es');
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header/header.component';
import { FooterComponent } from './component/footer/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './component/shared/angular-material/angular-material.module';
import { ClientComponent } from './component/client/client/client.component';
import { LoguinComponent } from './component/loguin/loguin/loguin.component';
import { ListClientComponent } from './component/client/list-client/list-client.component';
import { LockClientComponent } from './component/lock_client/lock-client/lock-client.component';
import { VariableComponent } from './component/variable/variable/variable.component';
import { LockVariableComponent } from './component/variable/lock-variable/lock-variable.component';
import { GeneralComponent } from './component/general/general/general.component';
import { ConfigurationComponent } from './component/configuracion/configuration/configuration.component';
import { UsersComponent } from './component/user/users/users.component';
import { ListUsersComponent } from './component/user/list-users/list-users.component';
import { ListCaptureDataComponent } from './component/capture/list-capture-data/list-capture-data.component';
import { CaptureDataComponent } from './component/capture/capture-data/capture-data.component';
import { ListSensorsComponent } from './component/sensor/list-sensors/list-sensors.component';
import { SensorsComponent } from './component/sensor/sensors/sensors.component';
import { registerLocaleData } from '@angular/common';
import { ThresholdsComponent } from './component/thresholds/thresholds/thresholds.component';
import { ListThresholdsComponent } from './component/thresholds/list-thresholds/list-thresholds.component';
import { VisualizacionComponent } from './component/visualizacion/visualizacion/visualizacion.component';
import { DashboardComponent } from './component/dashboard/dashboard/dashboard.component';
import { TableDateComponent } from './component/tableDate/table-date/table-date.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ClientComponent,
    LoguinComponent,
    ListClientComponent,
    LockClientComponent,
    VariableComponent,
    LockVariableComponent,
    GeneralComponent,
    ConfigurationComponent,
    UsersComponent,
    ListUsersComponent,
    ListCaptureDataComponent,
    CaptureDataComponent,
    ListSensorsComponent,
    SensorsComponent,
    ThresholdsComponent,
    ListThresholdsComponent,
    VisualizacionComponent,
    DashboardComponent,
    TableDateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
