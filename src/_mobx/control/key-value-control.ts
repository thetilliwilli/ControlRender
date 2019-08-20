import { BaseControl } from "./base-control";
import { action } from "mobx";

export class KeyValueControl extends BaseControl<{ key: string; value: any }> {
  @action.bound
  public setValue(newValue : any) { this.value = newValue; }
}