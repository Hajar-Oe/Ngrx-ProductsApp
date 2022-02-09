import {Product} from "../model/product.model";
import {ProductActions, ProductsActionsTypes} from "./products.actions";
import {Action} from "@ngrx/store";

export enum ProductsStateEnum{
  LOADING="Loading",
  LOADED="Loaded",
  ERROR="Error Loading",
  INITIAL="Inital"
}
export interface ProductState{
  products:Product[],
  errorMessage:string,
  dataState:ProductsStateEnum
}
const initState:ProductState={
  products:[],
  errorMessage:"",
  dataState:ProductsStateEnum.INITIAL
}
export function productsReducer(state:ProductState=initState, action:Action):ProductState{
switch (action.type){
  case ProductsActionsTypes.GET_ALL_PRODUCTS:
    return{...state, dataState:ProductsStateEnum.LOADING}
  case ProductsActionsTypes.GET_ALL_PRODUCTS_SUCCESS:
    return {...state,dataState:ProductsStateEnum.LOADED, products:(<ProductActions>action).payload}
  case ProductsActionsTypes.GET_ALL_PRODUCTS_ERROR:
    return {...state,dataState:ProductsStateEnum.ERROR, errorMessage:(<ProductActions>action).payload}
  case ProductsActionsTypes.GET_SELECTED_PRODUCTS:
    return{...state, dataState:ProductsStateEnum.LOADING}
  case ProductsActionsTypes.GET_SELECTED_PRODUCTS_SUCCESS:
    return {...state,dataState:ProductsStateEnum.LOADED, products:(<ProductActions>action).payload}
  case ProductsActionsTypes.GET_SELECTED_PRODUCTS_ERROR:
    return {...state,dataState:ProductsStateEnum.ERROR, errorMessage:(<ProductActions>action).payload}
  default: return {...state}
}
}
