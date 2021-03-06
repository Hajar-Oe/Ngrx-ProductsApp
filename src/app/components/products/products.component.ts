import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {map, Observable} from "rxjs";
import {ProductsStateEnum, ProductState} from "../../ngrx/products.reducer";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productsState$!:Observable<ProductState>;
  readonly productStateEnum=ProductsStateEnum;
  constructor(private store:Store<any>) { }

  ngOnInit(): void {
    this.productsState$=this.store.pipe(
      map((state)=> state.catalogueState)
    );
  }

}
