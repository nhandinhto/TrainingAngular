import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { IProduct } from "./product";
import { ProductService } from "./products.service";

@Component({
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
    pageTitle: string = "Product Detail";
    product: IProduct | undefined;
    imageWidth = 80;
    imageMargin = 2;
    lstProduct : IProduct[] = [];
    sub : Subscription | undefined;
    errorMessage = "";

    constructor(private route: ActivatedRoute, private router : Router, private productService : ProductService) {
    }

    ngOnInit(): void {
        console.log("in detail");
        const id = Number(this.route.snapshot.paramMap.get('id'));
        this.pageTitle += ` : ${id}`;
        this.sub = this.productService.getProduct().subscribe({
            next: products => {
              this.lstProduct = products;
              this.product = this.lstProduct.find(t=> t.productId == id);
            },
            error: err => this.errorMessage = err
          });
    }

    

    onRatingClicked(value: string): void {
        console.log(`Clicking ${value} stars`);
    }

    onBack() : void{
        this.router.navigate(['./products']);
    }
}