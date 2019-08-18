import { BaseControl } from "./base";

export class IntegerControl extends BaseControl<number> {

  constructor(value:number){
    super(value);
    this.up = this.up.bind(this);
    this.down = this.down.bind(this);
  }

  public up() { this.emit("changed", ++this._value); }
  public down() { this.emit("changed", --this._value); }
}