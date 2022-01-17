import { Stock } from "./stock.model";

export class Tea {
  _id!: string;
  reference!: number;
  name!: string;
  stock?: Array<Stock>;
}