import { NgModule } from '@angular/core';
import { MatTableModule, MatInputModule, MatPaginatorModule, MatCardModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatTableModule,
    MatInputModule,
    MatCardModule,
    MatPaginatorModule
  ],
  exports: [
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatCardModule
  ]
})

export class MaterialModule { }
