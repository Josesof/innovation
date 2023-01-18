import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Thresholds } from 'src/app/models/thresholds/thresholds';

@Component({
  selector: 'app-thresholds',
  templateUrl: './thresholds.component.html',
  styleUrls: ['./thresholds.component.css']
})
export class ThresholdsComponent implements OnInit {

  variableApi: any[] = ['Variable1', 'Variable2', 'Variable3'];
  myForm: FormGroup;
  idVariable: any;
  accion = 'CREAR UMBRALES';
  userId!: Thresholds;
  constructor(
    private fb: FormBuilder,

    private _router: Router,
    private aRoute: ActivatedRoute
  ) {
    this.myForm = this.fb.group({
      
 
      min: [
        '',
        Validators.required,
        Validators.maxLength(20),
        Validators.minLength(3),
      ],
      max: [
        '',
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(7),
      ],
      color: [
        '',
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(7),
      ],
      variable: ['', Validators.required],
    
    });

    const idParams = 'i';
    this.idVariable = this.aRoute.snapshot.params[idParams];
  }

  ngOnInit(): void {
    if (this.idVariable !== undefined) {
      this.accion = 'EDITAR UMBRALES';
    }
    this.editUser();
  }

  saveCapture(): void {
    const umbralSave: Thresholds = {
      id: this.myForm.get('id')?.value,
      min: this.myForm.get('min')?.value,
      max: this.myForm.get('max')?.value,
      color: this.myForm.get('color')?.value,
      vaiable: this.myForm.get('vaiable')?.value,
    };

    console.log(umbralSave);
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

  editionVariable(variable: Thresholds, id: number) {}

}

