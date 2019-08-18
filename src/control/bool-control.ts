import { BaseControl } from "./base";

export class BoolControl extends BaseControl<boolean> {
  constructor(value: boolean) {
    super(value);
    this.false = this.false.bind(this);
    this.true = this.true.bind(this);
    this.invert = this.invert.bind(this);
  }

  public false() { this.emit("changed", (this._value = false)); }
  public true() { this.emit("changed", (this._value = true)); }
  public invert() { this.emit("changed", (this._value = !this._value)); }
}
