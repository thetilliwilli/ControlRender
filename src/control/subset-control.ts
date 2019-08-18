import { BaseControl } from "./base";

export class SubsetControl<TValue> extends BaseControl<{set:TValue[],subset:TValue[]}>{

  constructor(value:{set:TValue[],subset:TValue[]}){
    super(value);

    this.include = this.include.bind(this);
    this.exclude = this.exclude.bind(this);
    this.replace = this.replace.bind(this);
    this.clear = this.clear.bind(this);
  }

  public include(value: { set: TValue[], subset: TValue[] }) {
    this.emit("changed", this._value = { set: value.set, subset: value.subset });
  }
  public exclude(value: { set: TValue[], subset: TValue[] }) {
    this.emit("changed", this._value = { set: value.set, subset: value.subset.filter(x => !~value.subset.indexOf(x)) });
  }
  public replace(value: { set: TValue[], subset: TValue[] }) {
    console.log("SubsetControl.replace", value);
    this.emit("changed", this._value = value);
  }
  public clear() {
    this.emit("changed", this._value = { set: [], subset: [] });
  }
}