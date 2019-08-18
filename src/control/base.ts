import { IControl } from "../interface/i-control";
import { EventEmitter } from "events";

export class BaseControl<TValue> extends EventEmitter implements IControl<TValue> {
  constructor(protected _value: TValue) { super(); }
  public get value(): TValue { return this._value; }
}
