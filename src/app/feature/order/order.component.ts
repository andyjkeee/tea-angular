import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute, Params} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";
import {CustomValidators} from "../../shared/validators/custom-validators";
import {CatalogService} from "../../shared/services/catalog.service";
import {OrderType} from "../../../types/order.type";

@Component({
  selector: 'order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})



export class OrderComponent implements OnInit {



  constructor(private activatedRoute: ActivatedRoute,
              private fb: FormBuilder,
              private catalogService: CatalogService,
              ) {
  }

  public checkoutForm = this.fb.group({
    name: ['', [Validators.required, Validators.pattern('^[a-zA-Zа-яА-Я]+$')]],
    last_name: ['', [Validators.required, Validators.pattern('^[a-zA-Zа-яА-Я]+$')]],
    phone: ['', [Validators.required, CustomValidators.phoneNumberValidator]],
    country: ['', [Validators.required]],
    zip: ['', [Validators.required]],
    product: ['', [Validators.required]],
    address: ['', [Validators.required, CustomValidators.addressValidator]],
    comment: ['']
  });

  hideFormHideText: boolean = true;
  hideTextShowTnx: boolean = false;
  showError: boolean = false;

  private subscription: Subscription | null = null;

  ngOnInit() {
    this.subscription = this.activatedRoute.queryParams.subscribe((params: Params) => {
      if (params['product']) {
        this.checkoutForm.patchValue({
          product: params['product']
        })
      }
    })
  }



  createOrder() {
    const completedForm = {
      name: this.checkoutForm.get('name')?.value!,
      last_name: this.checkoutForm.get('last_name')?.value!,
      phone: this.checkoutForm.get('phone')?.value!,
      country: this.checkoutForm.get('country')?.value!,
      zip: this.checkoutForm.get('zip')?.value!,
      product: this.checkoutForm.get('product')?.value!,
      address: this.checkoutForm.get('address')?.value!,
      comment: this.checkoutForm.get('comment')?.value!
    };

    this.catalogService.createOrder(completedForm)
      .subscribe(response => {
        if (response.success === 1 && !response.message) {
          this.hideFormHideText = false;
          this.hideTextShowTnx = true;
        } else {
          this.showError = true;
        }
      })
  }
}
