import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, switchMap } from 'rxjs';
import { IProductExtended } from 'src/app/shared/models/productExtended.model';
import { IProductModalModel } from 'src/app/shared/product-modal/product.modal.model';
import { DataService } from '../data.service';
import { CartService } from 'src/app/shared/services/cart.service';
import { IProduct } from '../product.model';
import { WishlistService } from 'src/app/shared/services/wishlist.service';
import { HttpConfigDressStore } from 'src/app/http.config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent  implements OnDestroy {
  wishList: IProductExtended[] = [];
  baseImagesUrl: string = "";
  private wishesSubscription: Subscription | null = null;
  
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

  constructor( private router: Router, private cartService : CartService, private wishService : WishlistService, private conf: HttpConfigDressStore) {
    this.baseImagesUrl = conf.baseImagesUrl;   
    this.wishesSubscription = this.wishService.getWishes().subscribe((products) => {
      this.wishList = products.wishes
    });

  this.wishService.getWishCount();
  }

  navigate(){
   this.router.navigate(['/clothes'])
  }

  ngOnDestroy(): void {
    this.wishService.changeWishList(this.wishList).subscribe(mess => 
      {
        console.log(mess)
      }).unsubscribe();

      if (this.wishesSubscription) {
        this.wishesSubscription.unsubscribe();
      }
  }

  filterPanelOpen = false;
  currentImageIndex = 0;

  mapToProductModal(index: number) {
    this.selectedModel = {
      _id: this.wishList[index]._id,
      brand: this.wishList[index].brand,
      description: this.wishList[index].description,
      name: this.wishList[index].name,
      color: '',
      size: '',
      gender: this.wishList[index].gender,
      imageUrls: this.makeImageUrl(this.wishList[index]),
      type: this.wishList[index].type,
      colors: this.wishList[index].colors,
      price: this.wishList[index].price
    };
  }


  makeImageUrl(product: IProductExtended) {
    let stringArr: string[] = [];
    for (let index = 0; index < product.imageUrls.length; index++) {
      stringArr.push(`${this.baseImagesUrl}/${product.type}/${product._id}/${product.imageUrls[index]}`)
    }

    return stringArr;
  }

  toggleTextExpansion(index: number) {
    this.wishList[index].showFullText = !this.wishList[index].showFullText;
  }

  toggleHeart(product: IProductExtended) {
    product.heartActive = !product.heartActive;
    
      this.wishList =  this.wishList.filter(function (prod) {
        return prod._id != product._id;
    });
    
    this.wishService.getWishCount(this.wishList.length);
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
