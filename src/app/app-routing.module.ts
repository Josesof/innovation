import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './component/client/client/client.component';
import { LoguinComponent } from './component/loguin/loguin/loguin.component';
import { ListClientComponent } from './component/client/list-client/list-client.component';
import { LockClientComponent } from './component/lock_client/lock-client/lock-client.component';
import { LockVariableComponent } from './component/variable/lock-variable/lock-variable.component';
import { VariableComponent } from './component/variable/variable/variable.component';
import { GeneralComponent } from './component/general/general/general.component';
import { ConfigurationComponent } from './component/configuracion/configuration/configuration.component';
import { UsersComponent } from './component/user/users/users.component';
import { ListUsersComponent } from './component/user/list-users/list-users.component';
import { ListCaptureDataComponent } from './component/capture/list-capture-data/list-capture-data.component';
import { CaptureDataComponent } from './component/capture/capture-data/capture-data.component';
import { ListSensorsComponent } from './component/sensor/list-sensors/list-sensors.component';
import { SensorsComponent } from './component/sensor/sensors/sensors.component';
import { ThresholdsComponent } from './component/thresholds/thresholds/thresholds.component';
import { ListThresholdsComponent } from './component/thresholds/list-thresholds/list-thresholds.component';
import { VisualizacionComponent } from './component/visualizacion/visualizacion/visualizacion.component';
import { DashboardComponent } from './component/dashboard/dashboard/dashboard.component';
import { TableDateComponent } from './component/tableDate/table-date/table-date.component';

const routes: Routes = [
  { path: 'clientList', component: ListClientComponent },
  { path: 'createdClient', component: ClientComponent },
  { path: 'createdClient/:i', component: ClientComponent }, 
  { path: 'createVariable', component: VariableComponent },
  { path: 'createVariable/:i', component: VariableComponent },
  { path: 'lockVariable/:i', component: LockVariableComponent },
  { path: 'createUser', component: UsersComponent },
  { path: 'createUser/:i', component: UsersComponent },
  { path: 'createCapture', component: CaptureDataComponent },
  { path: 'createCapture/:i', component: CaptureDataComponent },
  { path: 'createSensor', component: SensorsComponent },
  { path: 'createSensor/:i', component: SensorsComponent },
  { path: 'createThresholds', component: ThresholdsComponent },
  { path: 'createThresholds/:i', component: ThresholdsComponent },

  {
    path: 'general/:i',
    component: GeneralComponent,
    children: [
      

      { path: 'grafica', component: DashboardComponent },
      { path: 'tablaDatos', component: TableDateComponent },
      { path: 'lockClient/:i', component: LockClientComponent },
      {
        path: 'configuracion',
        component: ConfigurationComponent,
        children: [
          { path: 'userList', component: ListUsersComponent },
          { path: 'captureList', component: ListCaptureDataComponent },
          { path: 'sensorsList', component: ListSensorsComponent },
          { path: 'thresholdsList', component: ListThresholdsComponent },
        ],
      },
      { path: 'vizualizacion', component: VisualizacionComponent },
    ],
  },

  { path: '**', pathMatch: 'full', redirectTo: 'clientList' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
