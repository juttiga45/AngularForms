import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  constructor() {}
  birthday = new Date(2009, 3, 15);
  today = new Date();
  ngOnInit(): void {}
}
