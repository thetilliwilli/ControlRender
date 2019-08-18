import { EventEmitter } from "events";

export interface IControl<TValue> extends EventEmitter {
  value: TValue;
}