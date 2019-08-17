import { EventEmitter } from "events";

export class StringControl extends EventEmitter {
  _value: string = "xxx";

  constructor(value:string){
    super();

    this._value = value;

    this.change = this.change.bind(this);
  }

  public change(value : string) { this.emit("changed", this._value = value); }
  public get value(): string { return this._value; }
}
