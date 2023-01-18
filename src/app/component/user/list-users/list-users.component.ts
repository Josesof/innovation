import { Component, OnInit, ViewChild } from '@angular/core';
import { of, Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { FormControl } from '@angular/forms';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { Client } from 'src/app/models/client/client';
import { Rols } from 'src/app/models/rols/rols';
import { Users } from 'src/app/models/users/users';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css'],
})
export class ListUsersComponent implements OnInit {
  displayedColumns: string[] = [
    'nombre',
    'correo',
    'permisos',
    'rol',
    'estado',
    'gestion',
  ];

  @ViewChild(MatSort, { static: true })
  sort!: MatSort;
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  public usuario: Users = new Users();
  public listUser: any = [
    {
      id: 1,
      nombre: 'Robert Hart',
      apellidos: 'Spend Ritter',
      correo: 'rober@gmail.com',
      rol: 'Cliente',
      estado: true,
      permiso: 'Humedad',
    },
  ];

  dataSource = new MatTableDataSource<Client>();

  toppings = new FormControl('');

  public titulo: string = 'Lista De Usuario';

  labelPosition: 'before' | 'after' = 'after';

  constructor(public dialog: MatDialog, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.listUsers();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  listUsers() {
    this.dataSource = new MatTableDataSource(this.listUser);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    console.log(this.dataSource);
  }

  deleteUser(element: Users): void {
    console.log('this is the element : ' + element);
  }
}
