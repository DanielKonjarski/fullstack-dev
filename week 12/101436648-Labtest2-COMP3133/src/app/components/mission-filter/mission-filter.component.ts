import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-mission-filter',
  templateUrl: './mission-filter.component.html',
  styleUrls: ['./mission-filter.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule
  ]
})
export class MissionFilterComponent implements OnInit {
  @Output() yearSelected = new EventEmitter<string | null>();
  yearControl = new FormControl('');
  
  years: string[] = [];
  
  constructor() { }

  ngOnInit(): void {
    const currentYear = new Date().getFullYear();
    for (let year = 2006; year <= currentYear; year++) {
      this.years.push(year.toString());
    }
    
    this.yearControl.valueChanges.subscribe(value => {
      this.yearSelected.emit(value);
    });
  }

  clearFilter(): void {
    this.yearControl.setValue('');
  }
}