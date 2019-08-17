import { EventEmitter } from "events";

export class IntegerControl extends EventEmitter {
  _value: number = 0;

  constructor(value:number){
    super();

    this._value = value;
    
    this.up = this.up.bind(this);
    this.down = this.down.bind(this);
  }

  public up() { this.emit("changed", ++this._value); }
  public down() { this.emit("changed", --this._value); }

  public get value(): number { return this._value; }
}
