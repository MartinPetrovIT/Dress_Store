import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpConfigDressStore } from '../../http.config';
import { IProductExtended } from '../../shared/models/productExtended.model';
import { IProductModalModel } from 'src/app/shared/product-modal/product.modal.model';
import { WishlistService } from 'src/app/shared/services/wishlist.service';
import { CartService } from 'src/app/shared/services/cart.service';
import { BehaviorSubject, Subscription, switchMap } from 'rxjs';
import { IProduct } from '../product.model';
@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.scss']
})
export class ClothesComponent implements OnInit, OnDestroy {
  products: IProductExtended[] = [];
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
  constructor(private dataService: DataService, private cartService : CartService, private wishService : WishlistService, private conf: HttpConfigDressStore) {
    this.baseImagesUrl = conf.baseImagesUrl;   
  }

  ngOnInit(): void {
    this.wishesSubscription = this.wishService.getWishes().pipe(
      switchMap(wishes => {
        this.wishList = wishes.wishes;
        return this.dataService.getAllProducts();
      })
    ).subscribe(products => {
      this.products = products.map(product => ({
        ...product,
        heartActive: this.checkIfItemIsWished(product),
        showFullText: false
      }));
    });

  this.wishService.getWishCount();
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

  checkIfItemIsWished(item: IProduct){
    console.log(this.wishList.length)
    if(this.wishList.filter( x => x._id == item._id).length > 0)
    {
      return true;
    }

    return false;
  }


  makeImageUrl(product: IProductExtended) {
    let stringArr: string[] = [];
    for (let index = 0; index < product.imageUrls.length; index++) {
      stringArr.push(`${this.baseImagesUrl}/${product.type}/${product._id}/${product.imageUrls[index]}`)
    }

    return stringArr;
  }

  toggleTextExpansion(index: number) {
    this.products[index].showFullText = !this.products[index].showFullText;
  }

  toggleHeart(product: IProductExtended) {
    product.heartActive = !product.heartActive;
    
    if(product.heartActive) {
      console.log("active")
      this.wishList.push(product);
    } else{
      console.log("not active")
      this.wishList =  this.wishList.filter(function (prod) {
        return prod._id != product._id;
    });
    }

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
