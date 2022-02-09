import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {GetAllProdcutsAction, GetSelectedProdcutsAction} from "../../../ngrx/products.actions";

@Component({
  selector: 'app-products-navbar',
  templateUrl: './products-navbar.component.html',
  styleUrls: ['./products-navbar.component.css']
})
export class ProductsNavbarComponent implements OnInit {

  constructor(private store:Store<any>) { }

  ngOnInit(): void {
  }

  onGetAllProducts() {
  this.store.dispatch(new GetAllProdcutsAction({}));
  }

  onGetSelectedProducts() {
    this.store.dispatch(new GetSelectedProdcutsAction({}));
  }
}
