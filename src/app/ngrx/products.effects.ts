import {Injectable} from "@angular/core";
import {ProductsService} from "../services/products.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, mergeMap, Observable, of} from "rxjs";
import {Action} from "@ngrx/store";
import {
  GetAllProdcutsErrorAction,
  GetAllProdcutsSuccessAction, GetSelectedProdcutsErrorAction,
  GetSelectedProdcutsSuccessAction,
  ProductsActionsTypes
} from "./products.actions";


@Injectable()
export class ProductsEffects{
  constructor(private productsService:ProductsService, private effectActions:Actions) {
  }

  getAllProductsEffect:Observable<Action>=createEffect(()=>this.effectActions.pipe(
    ofType(ProductsActionsTypes.GET_ALL_PRODUCTS),
    mergeMap((action)=>{
          return this.productsService.getAllProducts().pipe(
            map((products)=> new GetAllProdcutsSuccessAction(products)),
            catchError((err) => of(new GetAllProdcutsErrorAction(err.message)))
          );
    })
  ));

  getSelectedProductsEffect:Observable<Action>=createEffect(()=>this.effectActions.pipe(
    ofType(ProductsActionsTypes.GET_SELECTED_PRODUCTS),
    mergeMap((action)=>{
      return this.productsService.getSelectedProducts().pipe(
        map((products)=> new GetSelectedProdcutsSuccessAction(products)),
        catchError((err) => of(new GetSelectedProdcutsErrorAction(err.message)))
      );
    })
  ));

}
