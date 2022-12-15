import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteMainComponent } from './cliente-main/cliente-main.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ClienteMainComponent,
    ClienteFormComponent,
  ],
  exports:[
    ClienteMainComponent,
    ClienteFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class ClienteModule { }
