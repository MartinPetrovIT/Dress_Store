import { Component } from '@angular/core';

@Component({
  selector: 'app-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.scss']
})
export class FilterPanelComponent {
  priceSliderValue: number = 5000;
  minPrice: number = 1;
  maxPrice: number = 10000;
  shouldSlide: boolean = false; 
  shouldSlide2: boolean = false; 
}
