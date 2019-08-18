import { BaseControl } from "./base";

export class StringControl extends BaseControl<string> {
  constructor(value:string){
    super(value);
    this.change = this.change.bind(this);
  }

  public change(value : string) { this.emit("changed", this._value = value); }
}