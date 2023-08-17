import { ICustomerCartModel } from "src/app/core/cart/customer.model";
import { IProductCartModel } from "../services/product.cart.model";

export interface IOrder extends ICustomerCartModel{
  totalPrice: number;
  orderDate: string;
  address: string;
  products: IProductCartModel[]
}