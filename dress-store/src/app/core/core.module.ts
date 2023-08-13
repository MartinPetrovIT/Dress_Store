import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GlobalLoaderComponent } from "./global-loader/global-loader.component";
import { SharedModule } from "../shared/shared.module";
import { HomeComponent } from './home/home.component';
import { MaterialModule } from "../material.module";
import { ClothesComponent } from './clothes/clothes.component';
import { CartComponent } from './cart/cart.component';
import { FormsModule } from "@angular/forms";
import { DataService } from "./data.service";

@NgModule({
    providers:[
        DataService
    ],
    declarations:[
        GlobalLoaderComponent,
        HomeComponent,
        ClothesComponent,
        CartComponent
    ],
    imports:[
        CommonModule,
        SharedModule,
        FormsModule,
        MaterialModule
    ],
    exports:[
        GlobalLoaderComponent
    ]
})

export class CoreModule{

}