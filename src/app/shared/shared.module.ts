import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {CardProductComponent} from "./components/card-product/card-product.component";
import {FooterComponent} from "./components/footer/footer.component";
import {HeaderComponent} from "./components/header/header.component";
import {ProductCardComponent} from "./components/product-card/product-card.component";
import {HideDescriptionPipe} from "./pipes/hide-description.pipe";



@NgModule({
  declarations: [
    CardProductComponent,
    FooterComponent,
    HeaderComponent,
    ProductCardComponent,
    HideDescriptionPipe,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CardProductComponent,
    FooterComponent,
    HeaderComponent,
    ProductCardComponent,
    HideDescriptionPipe,
  ]
})
export class SharedModule { }
