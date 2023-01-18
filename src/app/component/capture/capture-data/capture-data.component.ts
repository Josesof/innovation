import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CaptureData } from 'src/app/models/capture_data/capture-data';

@Component({
  selector: 'app-capture-data',
  templateUrl: './capture-data.component.html',
  styleUrls: ['./capture-data.component.css']
})
export class CaptureDataComponent implements OnInit {

  variableApi: any[] = ['Variable1', 'Variable2', 'Variable3'];
  myForm: FormGroup;
  idVariable: any;
  accion = 'Crear Sitio De Captura De Datos';
  userId!: CaptureData;
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
      nombre: [
        '',
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(11),
      ],
      longitud: [
        '',
        Validators.required,
        Validators.maxLength(20),
        Validators.minLength(3),
      ],
      latitud: [
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
      variable: [
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
      this.accion = 'Editar Sitio De Captura De Datos';
    }
    this.editUser();
  }

  saveCapture(): void {
    const captureDataSave: CaptureData = {
      idSistem: this.myForm.get('idSistem')?.value,
      nombre: this.myForm.get('nombre')?.value,
      longitud: this.myForm.get('longitud')?.value,
      latitud: this.myForm.get('latitud')?.value,
      estado: this.myForm.get('estado')?.value,
      sitioCapturaDato: this.myForm.get('sitioCapturaDato')?.value,
      variable: this.myForm.get('variable')?.value,
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

  editionVariable(variable: CaptureData, id: number) {}

}
