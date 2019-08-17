import { EventEmitter } from "events";

export class SubsetControl<T> extends EventEmitter {
  _set: T[] = [];
  _subset: T[] = [];

  constructor(set : T[]){
    super();

    this._set = set;

    this.include = this.include.bind(this);
    this.exclude = this.exclude.bind(this);
    this.replace = this.replace.bind(this);
    this.clear = this.clear.bind(this);
  }

  public include(values: T[]) { this.emit("changed", this._subset = this._subset.concat(values)); }
  public exclude(values: T[]) { this.emit("changed", this._subset = this._subset.filter(x => !~values.indexOf(x))); }
  public replace(values: T[]) { this.emit("changed", this._subset = values); }
  public clear() { this.emit("changed", this._subset = []); }

  public get set(): T[] { return this._set; }
  public get subset(): T[] { return this._subset; }
}