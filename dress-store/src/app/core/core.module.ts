import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GlobalLoaderComponent } from "./global-loader/global-loader.component";
import { SharedModule } from "../shared/shared.module";
import { HomeComponent } from './home/home.component';
import { MaterialModule } from "../material.module";
import { ClothesComponent } from './clothes/clothes.component';

@NgModule({
    declarations:[
        GlobalLoaderComponent,
        HomeComponent,
        ClothesComponent
    ],
    imports:[
        CommonModule,
        SharedModule,
        MaterialModule
    ],
    exports:[
        GlobalLoaderComponent
    ]
})

export class CoreModule{

}