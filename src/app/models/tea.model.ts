import { Stock } from "./stock.model";

export class Tea {
  reference!: number;
  name!: string;
  totalQuantity!: number;
  stock?: Array<Stock>;
  _id!: string;
}