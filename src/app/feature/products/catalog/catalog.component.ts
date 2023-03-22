import {Component, OnInit} from '@angular/core';
import {CatalogService} from "../../../shared/services/catalog.service";
import {Router} from "@angular/router";
import {CatalogType} from "../../../../types/catalog.type";
import {tap} from "rxjs";

@Component({
  selector: 'catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  constructor(private catalogService: CatalogService, private router: Router) {
  }

  catalog: CatalogType[] = [];
  loading: boolean = false;

  ngOnInit() {
    this.loading = true;
    this.catalogService.getCatalog()
      .pipe(
        tap(() => {
          this.loading = false;
        })
      )
      .subscribe(
        {
          next: (data) => {
            this.catalog = data;
          },
          error: (error) => {
            console.log(error);
            this.router.navigate(['/'])
          }
        }
      )
  }

}
