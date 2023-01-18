import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Sensors } from 'src/app/models/sensors/sensors';

@Component({
  selector: 'app-sensors',
  templateUrl: './sensors.component.html',
  styleUrls: ['./sensors.component.css']
})
export class SensorsComponent implements OnInit {

  variableApi: any[] = ['Variable1', 'Variable2', 'Variable3'];
  sitioCapturaApi: any[] = ['Sitio1', 'Sitio2', 'Sitio3'];
  myForm: FormGroup;
  idVariable: any;
  accion = 'Crear Sensor';
  userId!: Sensors;
  constructor(
    private fb: FormBuilder,

    private _router: Router,
    private aRoute: ActivatedRoute
  ) {
    this.myForm = this.fb.group({
      
      idSistem: [
        '',
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(11),
      ],
      nombreSensor: [
        '',
        Validators.required,
        Validators.maxLength(20),
        Validators.minLength(3),
      ],
      color: [
        '',
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(7),
      ],
      variable: [
        '',
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(7),
      ],
      estado: ['', Validators.required],
      sitioCapturaDato: [
        '',
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(7),
      ],
    });

    const idParams = 'i';
    this.idVariable = this.aRoute.snapshot.params[idParams];
  }

  ngOnInit(): void {
    if (this.idVariable !== undefined) {
      this.accion = 'Editar Sensor';
    }
    this.editUser();
  }

  saveCapture(): void {
    const captureDataSave: Sensors = {
      idSistem: this.myForm.get('idSistem')?.value,
      nombreSensor: this.myForm.get('nombreSensor')?.value,
      color: this.myForm.get('color')?.value,
      variable: this.myForm.get('variable')?.value,
      estado: this.myForm.get('estado')?.value,
      sitioCapturaDato: this.myForm.get('sitioCapturaDato')?.value,
      id: 0,
    };

    console.log(captureDataSave);
    /**
     * this._usuarioService.saveUser(userSave).subscribe(
      _response => this._router.navigate(['/listar'])
    )
     */
  }

  editUser() {
    /**
   *  const empleado : any = this._usuarioService.getUserId(this.idEmpleado).subscribe(
    empleado2 => {
    console.log(empleado2)
    this.userId = empleado2;
    console.log(this.userId)
    }
   );
   */
    /***
   *    this.myForm.patchValue({
    nombre: empleado.nombre,
    primerApellido: empleado.primerApellido,
    segundoApellido: empleado.segundoApellido,
    numeroDocumento: empleado.numeroDocumento,
    direccion: empleado.direccion,
    correo: empleado.correo,
    rol: empleado.rol,
    contrasena: empleado.contrasena,
    confirmaContrasena: empleado.confirmaContrasena,
    
  })
   */
  }

  editionVariable(variable: Sensors, id: number) {}

}
