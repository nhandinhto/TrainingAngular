import { NgModule } from "@angular/core";   
import { CommonModule } from "@angular/common";
import { ProductListComponent } from "./product-list.component";
import { ProductDetailComponent } from "./product-detail.component";
import { ConvertToSpacePipes } from "../shared/convert-to-space.pipe";
import {  RouterModule } from "@angular/router";
import { ProductDetailGuard } from "./product-detali.guard";
import { SharedModule } from "../shared/shared-module.module";

@NgModule({
    declarations: [
        ProductListComponent,
        ProductDetailComponent,
        ConvertToSpacePipes,
    ],
    imports: [
        RouterModule.forChild([
            {
                path : 'products' , component : ProductListComponent
            },
            {
                path: 'products/:id',
                component: ProductDetailComponent,
                canActivate: [ProductDetailGuard]
            }
        ]),
        SharedModule
    ]
})

export class ProductModule {

}