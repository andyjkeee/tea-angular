import {Component, OnInit} from '@angular/core';
import {CatalogType} from "../../../../types/catalog.type";
import {ActivatedRoute, Router} from "@angular/router";
import {CatalogService} from "../../../shared/services/catalog.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{
  product: CatalogType;

  constructor(private activatedRoute: ActivatedRoute, private catalogService: CatalogService, private router: Router) {
    this.product = {
      id: 0,
      image: '',
      title: '',
      price: 0,
      description: ''
    }
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {


        this.catalogService.getProduct(+params['id'])
          .subscribe({
            next: (data) => {
              this.product = data
            },
            error: (error) => {
              this.router.navigate(['/']);
            }
          })
      }
    })
  }

}
