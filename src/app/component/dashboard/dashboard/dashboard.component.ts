import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  minDate: Date;
  maxDate: Date;
  variableApi: any[] = ['Variable1', 'Variable2', 'Variable3'];
  myForm: FormGroup;

  constructor(private fb: FormBuilder) { 
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date(currentYear + 1, 11, 31);
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
  }

  ngOnInit(): void {
  }

}
