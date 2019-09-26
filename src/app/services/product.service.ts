import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  url = "http://localhost:3000";
  constructor(private http: HttpClient) { }

  add(product) {
    return this.http.post<any>(this.url + "/add", product);
  }

  lists() {
    return this.http.get<any>(this.url + "/lists");
  }
  delete(id) {
    return this.http.post<any>(this.url + "/delete", { id: id });
  }
  update(updateProduct) {
    return this.http.post<any>(this.url + "/update", updateProduct);
  }

  getItem(id) {
    console.log(id);
    return this.http.post<any>(this.url + "/getItem", { id: id });
  }
}
