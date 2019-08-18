import { ControlType } from "../control";

export class PropertyInfo {
  constructor(
    public key: string,
    public path: string,
    public value: any,
    public control: ControlType,
  ) {}
}