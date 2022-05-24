import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PrductsListService {

  private REST_API_SERVER = "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }

  public getRecentProducts(){
    return this.httpClient.get(this.REST_API_SERVER + '/recentProducts');
  }

  public getProducts(){
    return this.httpClient.get(this.REST_API_SERVER + '/products');
  }
}
