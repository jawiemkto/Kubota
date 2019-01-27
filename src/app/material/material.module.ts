import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
