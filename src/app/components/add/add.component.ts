import { Component, OnInit } from "@angular/core";
import { ProductService } from "../../services/product.service";

@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.css"]
})
export class AddComponent implements OnInit {
  productunits;
  productname;
  productid;
  description;
  price;
  constructor(private service: ProductService) { }

  ngOnInit() { }

  add() {
    let product = { id: this.productid, name: this.productname, price: this.price, description: this.description, units: this.productunits };


    this.service.add(product).subscribe((data) => {
      console.log(data)
    });
  }
}
