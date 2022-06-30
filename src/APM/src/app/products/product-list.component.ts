import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { IProduct } from "./product";
import { ProductService } from "./products.service";

@Component({
  selector: "pm-products",
  templateUrl: `./products-list.component.html`,
  styleUrls: ['./product-list.component.css'], // we can set multiple file style in styles urls
})

export class ProductListComponent implements OnInit, OnDestroy {
  //#region  constructor service
  constructor(private productService: ProductService) { }

  //#endregion

  products: IProduct[] = [];
  filterProduct: IProduct[] = [];
  title = "Products List Components";
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  errorMessage = "";
  sub : Subscription | undefined;

  //#region listFilter and get set 
  private _listFilter: string = '';

  public get listFilter(): string {
    return this._listFilter;
  }

  public set listFilter(arg: string) {
    this._listFilter = arg;
    this.filterProduct = this.performFilter(this.products, arg);
  }
  //#endregion



  //#region events

  ngOnInit(): void {
    console.log("Initializing");
    this.sub = this.productService.getProduct().subscribe({
      next: products => {
        this.products = products;
        this.filterProduct = this.products;
      },
      error: err => this.errorMessage = err
    });
  }
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  performFilter = (arg: IProduct[], value: string): IProduct[] => {
    value = value.toLocaleLowerCase();
    return arg.filter((item: IProduct) => {
      return item.productName.toLocaleLowerCase().includes(value);
    })
  }

  onRatingClicked(value: string): void {
    console.log(`Clicking ${value} stars`);
  }
  //#endregion
}