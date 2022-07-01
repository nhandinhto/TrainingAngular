import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path : '**' , component : WelcomeComponent, pathMatch: 'full'
      },
      {
        path : 'welcome' , component : WelcomeComponent
      },
      {
        path : '' , component : WelcomeComponent , pathMatch : 'full'
      }

    ]),
    ProductModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
