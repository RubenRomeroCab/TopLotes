import { Item } from "./item.model";

export interface Pale{
    img:string;
    vendido:boolean;
    priceId:string;
    destacado?:boolean,
    id:number,
    nombre: string,
    productos: number,
    precio: number,
    items: Item [],
    categoria?:string;
    link:string,

}