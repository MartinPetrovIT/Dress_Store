import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { FilterPanelComponent } from './filter-panel/filter-panel.component';
import { ProductModalComponent } from './product-modal/product-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SpinnerComponent,
    FilterPanelComponent,
    ProductModalComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    SpinnerComponent,
    FilterPanelComponent,
    ProductModalComponent,
  ]
})
export class SharedModule { }
