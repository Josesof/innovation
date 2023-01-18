import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Variable } from 'src/app/models/variables/variable';

@Component({
  selector: 'app-variable',
  templateUrl: './variable.component.html',
  styleUrls: ['./variable.component.css'],
})
export class VariableComponent implements OnInit {
  unidadApi: any[] = ['Lts', 'Psi', 'Cms'];
  myForm: FormGroup;
  idVariable: any;
  accion = 'Crear Variable';
  userId!: Variable;
  constructor(
    private fb: FormBuilder,

    private _router: Router,
    private aRoute: ActivatedRoute
  ) {
    this.myForm = this.fb.group({
      nombreVariable: [
        '',
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(11),
      ],
      idSistem: [
        '',
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(11),
      ],
      idUnidadMedida: [
        '',
        Validators.required,
        Validators.maxLength(20),
        Validators.minLength(3),
      ],
      tiempoMuestreo: [
        '',
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(7),
      ],
      estado: ['', Validators.required],
    });

    const idParams = 'i';
    this.idVariable = this.aRoute.snapshot.params[idParams];
  }

  ngOnInit(): void {
    if (this.idVariable !== undefined) {
      this.accion = 'Editar Variable';
    }
    this.editUser();
  }

  saveVariable(): void {
    const variableSave: Variable = {
      idSistem: this.myForm.get('idSistem')?.value,
      nombreVariable: this.myForm.get('nombreVariable')?.value,
      estado: this.myForm.get('estado')?.value,
      tiempoMuestreo: this.myForm.get('tiempoMuestreo')?.value,
      idUnidadMedida: this.myForm.get('idUnidadMedida')?.value,
      id: 0,
    };

    console.log(variableSave);
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

  editionVariable(variable: Variable, id: number) {}
}
