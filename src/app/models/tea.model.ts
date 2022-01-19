import { Stock } from "./stock.model";

export class Tea {
  _id!: String;
  reference!: number;
  name!: String;
  stocks?: Array<Stock>;
}