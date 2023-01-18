import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from 'src/app/models/users/users';
import { Variable } from 'src/app/models/variables/variable';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  permisosVariablesApi: any[] = ['Variable 1', 'Variable 2', 'Variable 3'];
  rolsApi: any[] = ['Administrador', 'Usuario', 'General'];
  myForm: FormGroup;
  idVariable: any;
  accion = 'Crear Usuario';
  userId!: Users;

  constructor(
    private fb: FormBuilder,

    private _router: Router,
    private aRoute: ActivatedRoute
  ) {
    this.myForm = this.fb.group({
      nombre: [
        '',
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(11),
      ],
      apellidos: [
        '',
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(11),
      ],
      correo: [
        '',
        Validators.required,
        Validators.maxLength(20),
        Validators.minLength(3),
      ],
      permisos: ['', Validators.required],
      rol: ['', Validators.required],
      estado: ['', Validators.required],
    });

    const idParams = 'i';
    this.idVariable = this.aRoute.snapshot.params[idParams];
  }

  ngOnInit(): void {
    if (this.idVariable !== undefined) {
      this.accion = 'Editar Usuario';
    }
    this.editUser();
  }

  saveUser(): void {
    const userSave: Users = {
      nombre: this.myForm.get('nombre')?.value,
      apellidos: this.myForm.get('apellidos')?.value,
      estado: this.myForm.get('estado')?.value,
      correo: this.myForm.get('correo')?.value,
      permisos: this.myForm.get('permisos')?.value,
      rol: this.myForm.get('rol')?.value,
      id: 0,
      password: '',
      idCliente: 0
    };

    console.log(userSave);
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

  editionUser(variable: Users, id: number) {}
}
