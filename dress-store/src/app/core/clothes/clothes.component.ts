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
  images: string[] = ['assets/img/dsquared.jpeg', 'assets/img/babenciaga.jpg', 'assets/img/babenciaga.jpg'];
  currentImageIndex = 0;

  prevImage() {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
  }

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }
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
