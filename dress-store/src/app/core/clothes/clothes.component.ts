import { Component } from '@angular/core';

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.scss']
})
export class ClothesComponent {
  filterPanelOpen = false;
  heartActive: boolean = false;
  showFullText = false;

  toggleTextExpansion() {
    this.showFullText = !this.showFullText;
  } 

  toggleHeart() {
      this.heartActive = !this.heartActive;
  }
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
