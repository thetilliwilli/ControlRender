import { BaseControl } from "./base-control";
import { action } from "mobx";

export class IntegerControl extends BaseControl<number> {
  @action.bound
  public up() { ++this.value; }
  @action.bound
  public down() { --this.value; }
}