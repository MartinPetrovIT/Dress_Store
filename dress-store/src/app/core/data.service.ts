import {HttpClient} from "@angular/common/http"
import {Injectable} from "@angular/core"
import { IProduct } from "./product.model"
import { HttpConfigDressStore } from "../http.config"

@Injectable()
export class DataService{
 baseUrl = '/data'
  constructor(private http: HttpClient,private conf: HttpConfigDressStore)
 {
    this.baseUrl = this.conf.baseUrl + '/data'
 }

 getAllProducts(){
     return this.http.get<Array<IProduct>>(this.baseUrl + '/dress') 
 }

}