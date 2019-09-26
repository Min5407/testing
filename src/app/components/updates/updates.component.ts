import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from "../../services/product.service";


@Component({
  selector: 'app-updates',
  templateUrl: './updates.component.html',
  styleUrls: ['./updates.component.css']
})
export class UpdatesComponent implements OnInit {

  obejctId;
  productname;
  productunits;
  price;
  description;
  constructor(private service: ProductService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.obejctId = params.get('id');
      this.service.getItem(this.obejctId).subscribe(data => {
        console.log(data);
        this.productname = data[0].name;
        this.productunits = data[0].units;
        this.description = data[0].description;
        this.price = data[0].price;

      })


    })




  }

  update() {

    let updateProduct = { _id: this.obejctId, name: this.productname, price: this.price, description: this.description, units: this.productunits }
    this.service.update(updateProduct).subscribe(data => {
      if (data) {
        this.router.navigateByUrl("/lists")
      }
    })
  }




}
