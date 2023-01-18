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
import { Sensors } from 'src/app/models/sensors/sensors';
import { CaptureData } from 'src/app/models/capture_data/capture-data';


@Component({
  selector: 'app-list-sensors',
  templateUrl: './list-sensors.component.html',
  styleUrls: ['./list-sensors.component.css']
})
export class ListSensorsComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'nombre',
    'color',
    'variable',
    'sitioCaptura',
    'estado',
    'gestion'
  ];

  @ViewChild(MatSort, { static: true })
  sort!: MatSort;
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  public captureData: CaptureData = new CaptureData();
  public listCaptureData: any = [{id:1, nombre:'Prueba Integral', color:'blue',
    variable:'temperatura', sitioCaptura:'Playa', estado:true,}]
   public titulo:any='Listado Sensores';


   dataSource = new MatTableDataSource<CaptureData>();

   toppings = new FormControl('');
 
   
 
   constructor(
     public dialog: MatDialog, private _snackBar: MatSnackBar
   ) { }
 
   ngOnInit(): void {
    this.listCapture();
   }
 
   applyFilter(event: Event) {
     const filterValue = (event.target as HTMLInputElement).value;
     this.dataSource.filter = filterValue.trim().toLowerCase();
   }
 
   
   listCapture() {
    
     
       this.dataSource = new MatTableDataSource(this.listCaptureData);
       this.dataSource.paginator = this.paginator;
       this.dataSource.sort = this.sort;
 
       console.log(this.dataSource)
 
   }
 
   deleteUser(element: CaptureData): void {
 
     console.log('this is the element : ' + element)
   }
   
  }