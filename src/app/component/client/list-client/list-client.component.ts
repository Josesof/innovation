import { Component, OnInit, ViewChild } from '@angular/core';
import { of, Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import {FormControl} from '@angular/forms';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import {MatSnackBar, MatSnackBarRef} from '@angular/material/snack-bar';
import { Client } from 'src/app/models/client/client';
import { Rols } from 'src/app/models/rols/rols';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {

  displayedColumns: string[] = [
    'cliente',
    'gestion',
    'active'
  ];

  @ViewChild(MatSort, { static: true })
  sort!: MatSort;
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  public client: Client = new Client();
  public listUser: any = [{id:1,nombre:'Gases Antioquia',usuarioAsignado:'Robert Cans', contacto:'2348909',estado:true}];
  public titulo: string = 'Usuario';

  public rol: Rols = new Rols();
  public roles: any = [];

  dataSource = new MatTableDataSource<Client>();

  toppings = new FormControl('');

  

  constructor(
    public dialog: MatDialog, private _snackBar: MatSnackBar
  ) { }

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

      console.log(this.dataSource)

  }

  deleteUser(element: Client): void {

    console.log('this is the element : ' + element)
  }

}
