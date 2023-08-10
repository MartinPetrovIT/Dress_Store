import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { FilterPanelComponent } from './filter-panel/filter-panel.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SpinnerComponent,
    FilterPanelComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    SpinnerComponent,
    FilterPanelComponent
  ]
})
export class SharedModule { }
