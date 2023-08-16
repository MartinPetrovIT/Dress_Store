import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpConfigDressStore } from '../../http.config';
import { IProductExtended } from '../../shared/models/productExtended.model';
import { IProductModalModel } from 'src/app/shared/product-modal/product.modal.model';
@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.scss']
})
export class ClothesComponent implements OnInit {
  products: IProductExtended[] = [];
  baseImagesUrl: string = "";

  selectedModel: IProductModalModel = {
    _id: '',
    brand: '',
    description: '',
    name: '',
    color: '',
    size: '',
    gender: '',
    imageUrls: [],
    colors: [],
    type: '',
    price: 0
  };
  constructor(private dataService: DataService, private conf: HttpConfigDressStore) {
    this.baseImagesUrl = conf.baseImagesUrl;
  }
  ngOnInit(): void {

    this.dataService.hello().subscribe(
      (products) => {
        this.products = products.map(product => ({
          ...product,
          heartActive: false,
          showFullText: false
        }));
        
      },
      (error) => {
        console.error('Error getting products:', error);
      }
    );
  }

  filterPanelOpen = false;
  images: string[] = ['assets/img/dsquared.jpeg', 'assets/img/babenciaga.jpg', 'assets/img/babenciaga.jpg'];
  currentImageIndex = 0;

  mapToProductModal(index: number) {
    this.selectedModel = {
      _id: this.products[index]._id,
      brand: this.products[index].brand,
      description: this.products[index].description,
      name: this.products[index].name,
      color: '',
      size: '',
      gender: this.products[index].gender,
      imageUrls: this.makeImageUrl(this.products[index]),
      type: this.products[index].type,
      colors: this.products[index].colors,
      price: this.products[index].price
    };

    console.log(this.selectedModel)

  }


  makeImageUrl(product: IProductExtended) {
    let stringArr: string[] = [];
    for (let index = 0; index < product.imageUrls.length; index++) {
      stringArr.push(`${this.baseImagesUrl}/${product.type}/${product._id}/${product.imageUrls[index]}`)
    }

    return stringArr;
  }

  prevImage() {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
  }

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }
  toggleTextExpansion(index: number) {
    this.products[index].showFullText = !this.products[index].showFullText;
  }

  toggleHeart(index: number) {
    this.products[index].heartActive = !this.products[index].heartActive;
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
