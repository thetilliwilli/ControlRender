import { IControl } from "../interface/i-control";

export class PropertyInfo {
  constructor(
    public propertyKey: string,
    public propertyPath: string,
    public propertyValue: any,
    public control: IControl<any>
  ) {}
}