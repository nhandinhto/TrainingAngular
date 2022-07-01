import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { FormsModule } from '@angular/forms';
import { ConvertToSpacePipes } from './shared/convert-to-space.pipe';
import { StarComponent } from './shared/star.component';
import { ProductDetailComponent } from './products/product-detail.component';
import {HttpClientModule} from "@angular/common/http";
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailGuard } from './products/product-detali.guard';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacePipes,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { 
        path : 'products' , component : ProductListComponent
      },
      {
        path : 'products/:id' , 
        component : ProductDetailComponent,
        canActivate: [ProductDetailGuard],
      },
      {
        path : '**' , component : WelcomeComponent, pathMatch: 'full'
      },
      {
        path : 'welcome' , component : WelcomeComponent
      },
      {
        path : '' , component : WelcomeComponent , pathMatch : 'full'
      }

    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
