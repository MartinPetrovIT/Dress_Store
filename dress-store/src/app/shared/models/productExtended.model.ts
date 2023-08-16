import { IProduct } from "../../core/product.model";

export interface IProductExtended extends IProduct{
    heartActive: boolean;
    showFullText: boolean;
} 