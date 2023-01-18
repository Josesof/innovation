import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Client } from 'src/app/models/client/client';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  minDate: Date;
  maxDate: Date;
  rolesApi: any[] = ['ADMIN', 'USER','RESIDENT'];
  myForm : FormGroup;
  idEmpleado: any;
  accion = 'Crear Cliente';
  userId! : Client ;
  constructor(private fb: FormBuilder,
  
    private _router: Router, private aRoute: ActivatedRoute) { 
   const currentYear = new Date().getFullYear();
   this.minDate = new Date(currentYear - 20, 0, 1);
   this.maxDate = new Date(currentYear + 1, 11, 31);
   this.myForm = this.fb.group({
    nombreCliente: ['', Validators.required,  Validators.minLength(2), Validators.maxLength(11)],
    usuarioAsifnado: ['', Validators.required, Validators.maxLength(20), Validators.minLength(3)],
    contacto: ['', Validators.required, Validators.maxLength(10), Validators.minLength(7)],
    permisoVisualiza: ['', Validators.required],
     
   });

   const  idParams = 'i';
   this.idEmpleado = this.aRoute.snapshot.params[idParams];
  }

  ngOnInit(): void {
    if(this.idEmpleado !== undefined){
      this.accion = 'Editar Cliente';
    }
    this.editUser();
  }


  saveUser(): void{
    const userSave: Client = {
      nombreCliente: this.myForm.get('nombreCliente')?.value,
      usuarioAsifnado: this.myForm.get('usuarioAsifnado')?.value,
      contacto: this.myForm.get('contacto')?.value,
      permisoVisualiza: this.myForm.get('permisoVisualiza')?.value,
      id: 0
    };

    console.log(userSave)
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

editionUser(usuario: Client, id: number ){

}

}
