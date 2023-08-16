import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CartService } from '../services/cart.service';
import { IProductModalModel } from './product.modal.model';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.scss']
})
export class ProductModalComponent {
  productForm: FormGroup;
  flag : boolean = false;
  constructor(private cartServ: CartService, private aurhServ: AuthService, private router: Router, private formBuilder: FormBuilder) {
    this.productForm = this.formBuilder.group({
      dressSizesDropdown: ['', [Validators.required]],
      shoesSizesDropdown: ['', [Validators.required]],
      color: ['', [Validators.required]],
    });

    this.aurhServ.isAuthenticated().subscribe((authenticated) => {
      this.isAuthenticated = authenticated;
    });
  }


  isAuthenticated: boolean = false;
  currentImageIndex = 0;
  shoesSizes = ['34', '35', '36', '37', '37.5', '38', '39', '39.5', '40', '41', '41.5', '42', '42.5', '43', '44', '44.5', '45', '45.5', '46']
  dressSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL']

  @Input() product: IProductModalModel = {
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
  unTouch(){
    this.flag = false;
    this.productForm.get('color')?.markAsUntouched()
    this.productForm.get('shoesSizesDropdown')?.markAsUntouched()
    this.productForm.get('dressSizesDropdown')?.markAsUntouched()
  }
  addToCart() {
    this.flag = false;

    if(this.productForm.get('color')?.hasError('required'))
    {
      this.flag = true;
      this.productForm.get('color')?.markAsTouched();
    }
    if(this.product.type === 'shoes')
    {
      if(this.productForm.get('shoesSizesDropdown')?.hasError('required'))
      {
        this.flag = true;
        this.productForm.get('shoesSizesDropdown')?.markAsTouched();
      }
    } else{
      if(this.productForm.get('dressSizesDropdown')?.hasError('required'))
      {
        this.flag = true;
        this.productForm.get('dressSizesDropdown')?.markAsTouched();
      }
    }
    
    if (this.isAuthenticated) {
      if(!this.flag)
      {
        this.cartServ.addToCartList(this.product).subscribe(response => {
          this.cartServ.triggerCartandWishCountUpdate()
        });
      }
    } else {
      this.closeProductModal();
      this.router.navigate(['/login'])
    }
  }

  closeProductModal(): void {
    const modal = document.getElementById('closeModal');
    if (modal) {
      modal.click();
    }
  }
  prevImage() {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.product.imageUrls.length) % this.product.imageUrls.length;
  }

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.product.imageUrls.length;
  }
}
