import { BaseControl } from "./base-control";
import { action } from "mobx";
import {ValueType} from "../value-type/value-type";

export class IntegerControl extends BaseControl<ValueType<number>> {
  @action.bound
  public up() { console.log("IntegerControl.up");++this.value.value; }
  @action.bound
  public down() { console.log("IntegerControl.down");--this.value.value; }
}