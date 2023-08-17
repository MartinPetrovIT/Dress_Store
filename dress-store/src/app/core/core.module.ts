import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GlobalLoaderComponent } from "./global-loader/global-loader.component";
import { SharedModule } from "../shared/shared.module";
import { HomeComponent } from './home/home.component';
import { MaterialModule } from "../material.module";
import { ClothesComponent } from './clothes/clothes.component';
import { CartComponent } from './cart/cart.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DataService } from "./data.service";
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { OrdersComponent } from './orders/orders.component';
import { ProfileComponent } from './profile/profile.component';
import { WishlistComponent } from './wishlist/wishlist.component';

@NgModule({
    providers:[
        DataService
    ],
    declarations:[
        GlobalLoaderComponent,
        HomeComponent,
        ClothesComponent,
        CartComponent,
        PersonalInfoComponent,
        OrdersComponent,
        ProfileComponent,
        WishlistComponent
    ],
    imports:[
        CommonModule,
        SharedModule,
        FormsModule,
        MaterialModule,
        ReactiveFormsModule
    ],
    exports:[
        GlobalLoaderComponent
    ]
})

export class CoreModule{

}