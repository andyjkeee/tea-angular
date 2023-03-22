import {Component, Input} from '@angular/core';
import {CatalogType} from "../../../../types/catalog.type";

@Component({
  selector: 'card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent {

  @Input() product: CatalogType;

  constructor() {

this.product = {
  id: 0,
  image: '',
  title: '',
  price: 0,
  description: ''
}
  }

}
