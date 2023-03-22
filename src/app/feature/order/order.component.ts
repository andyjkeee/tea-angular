import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute, Params} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";
import {CustomValidators} from "../../shared/validators/custom-validators";
import {CatalogService} from "../../shared/services/catalog.service";

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

  formValues = {
    name: '',
    last_name: '',
    phone: '',
    country: '',
    zip: '',
    product: '',
    address: '',
    comment: ''
  }

  createOrder() {
    this.catalogService.createOrder(this.formValues)
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
