import { EventEmitter } from "events";

export interface IControlAny extends EventEmitter {
  value: any;
}

export interface IControl<TValue> extends IControlAny {
  value: TValue;
}