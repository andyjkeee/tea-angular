import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  showPopUp: boolean = false;
  private observable: Observable<boolean>

  constructor() {
    this.observable = new Observable((observer) => {
      setTimeout(() => {
        observer.next(true)
      }, 10000)
    })
  }

  ngOnInit() {
    this.observable.subscribe((param: boolean) => {
      this.showPopUp = param;
    })
  }

}
