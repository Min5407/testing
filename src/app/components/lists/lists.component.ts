import { Component, OnInit } from '@angular/core';
import { ProductService } from "../../services/product.service";


@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {

  products
  constructor(private service: ProductService) { }

  ngOnInit() {
    this.service.lists().subscribe(data => {
      this.products = data;
      console.log(this.products)

    })

  }
  deleteproduct(id) {

    this.service.delete(id).subscribe(data => {
      this.products = data
    })
  }


}
