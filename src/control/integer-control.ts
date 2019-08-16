import { EventEmitter } from "events";

export class IntegerControl extends EventEmitter {
  _value: number = 12;

  public up() {
    console.log("up");
    this.emit("changed", 1);
  }
  public down() {
    console.log("down");
    this.emit("changed", 2);
  }

  public get value(): number {
    return this._value;
  }

  public subscribe(listener: (...args: any[]) => void): void {
    this.addListener("changed", listener);
    this.on("changed", listener);
  }
}
