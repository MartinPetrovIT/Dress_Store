import { Component, OnInit, Type} from '@angular/core';
import { DataService } from '../data.service';
import { IProduct } from '../product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {

  slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});
  products: IProduct[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.hello().subscribe(
      (products) => {
          this.products = products;
          console.log("My products:", JSON.stringify(products, null, 2)); // Log the received products
      },
      (error) => {
          console.error('Error getting products:', error);
      }
  );
    this.slides[0] = {
      id: 0,
      src: './assets/img/babenciaga.jpg',
      title: 'First slide',
      subtitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
    };
    this.slides[1] = {
      id: 1,
      src: './assets/img/dsquared.jpeg',
      title: 'Second slide',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
    this.slides[2] = {
      id: 2,
      src: './assets/img/nike.jpeg',
      title: 'Third slide',
      subtitle: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
    }
  }
}