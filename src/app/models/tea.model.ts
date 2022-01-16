import { Stock } from "./stock.model";

export class Tea {
  reference!: number;
  name!: string;
  stock?: Array<Stock>;
  _id!: string;
}