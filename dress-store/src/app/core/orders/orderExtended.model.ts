import { IOrder } from "src/app/shared/models/order.model";

export interface IOrderExtended extends IOrder{
    isOpen: boolean;
}