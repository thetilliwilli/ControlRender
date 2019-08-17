import { EventEmitter } from "events";

export class BoolControl extends EventEmitter {

  _value: boolean = false;

  constructor(value : boolean){
    super();

    this._value = value;
    
    this.false = this.false.bind(this);
    this.true = this.true.bind(this);
    this.invert = this.invert.bind(this);

  }

  public false() { this.emit("changed", this._value=false); }
  public true() { this.emit("changed", this._value=true); }
  public invert() { this.emit("changed", this._value=!this._value); }

  public get value(): boolean { return this._value; }
}
