import { Component, OnInit, ViewChild } from '@angular/core';
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
import { Variable } from 'src/app/models/variables/variable';
import { Rols } from 'src/app/models/rols/rols';

@Component({
  selector: 'app-lock-client',
  templateUrl: './lock-client.component.html',
  styleUrls: ['./lock-client.component.css'],
})
export class LockClientComponent implements OnInit {
  displayedColumns: string[] = ['variable', 'gestion', 'active'];

  @ViewChild(MatSort, { static: true })
  sort!: MatSort;
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  dataSource = new MatTableDataSource<Variable>();
  public listVariable: any =[{id:1, idSistem:'0034TM', nombreVariable:'Temperatura', estado:true, tiempoMuestreo:23, idUnidadMedida:1}]

  constructor(public dialog: MatDialog, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this. listVariables();
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  listVariables() {
   
    
    this.dataSource = new MatTableDataSource(this.listVariable);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    console.log(this.dataSource)

}
}
