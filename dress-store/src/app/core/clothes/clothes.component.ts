import { Component } from '@angular/core';

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.scss']
})
export class ClothesComponent {
  filterPanelOpen = false;
  toggleFilterPanel() {
    this.filterPanelOpen = !this.filterPanelOpen;
    const filterOffcanvas = document.getElementById('filterOffcanvas');
    if (filterOffcanvas) {
      if (this.filterPanelOpen) {
        filterOffcanvas.classList.add('show');
      } else {
        filterOffcanvas.classList.remove('show');
      }
    }
  }
}
