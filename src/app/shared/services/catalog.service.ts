import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CatalogType} from "../../../types/catalog.type";
import {Observable} from "rxjs";
import {OrderType} from "../../../types/order.type";

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(private http: HttpClient) {
  }

  getCatalog(): Observable<CatalogType[]> {
    return this.http.get<CatalogType[]>('https://testologia.site/tea')
  }

  getProduct(id: number): Observable<CatalogType> {
    return this.http.get<CatalogType>(`https://testologia.site/tea?id=${id}`)
  }

  createOrder(data: OrderType) {
    return this.http.post<{ success: number, message?: string }>(`https://testologia.site/order-tea`, data)
  }
}
