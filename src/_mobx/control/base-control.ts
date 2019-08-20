import {observable} from "mobx";

export class BaseControl<TValue> {

  @observable
  public value : TValue;

  constructor(value: TValue) {
    this.value = value;
  }

  // public getValue(): TValue { return this.value; }

}