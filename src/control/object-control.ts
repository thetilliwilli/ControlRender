import { BaseControl } from "./base";

export class ObjectControl extends BaseControl<object> {

  constructor(value: object){
    super(value);
    this.dive = this.dive.bind(this);
  }

  public dive(){console.log("dive");this.emit("dive");}

}
