import { EventEmitter } from "events";

export class StringControl extends EventEmitter {
  _value: string = "xxx";

  constructor(){
    super();
    this.change = this.change.bind(this);
  }

  public change(value : string) { this.emit("changed", this._value = value); }
  public get value(): string { return this._value; }
}
