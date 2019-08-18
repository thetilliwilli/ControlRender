import { PropertyNode } from "../tree/tree";
import { PropertyInfo } from "./property-info";
import { IntegerControl } from "../control/integer-control";
import { StringControl } from "../control/string-control";
import { BoolControl } from "../control/bool-control";
import { SubsetControl } from "../control/subset-control";
import { ObjectControl } from "../control/object-control";
import { BaseControl } from "../control/base";

export class PropertyGridControl extends BaseControl<PropertyNode<PropertyInfo>> {
  private _root: PropertyNode<PropertyInfo>;

  constructor() {
    //hacky: needs find another way
    const rootNode = new PropertyNode(
      new PropertyInfo("", "/", null, new IntegerControl(0)),
      null
    );

    super(rootNode);

    this._root = rootNode;

    this.toPropertyInfo = this.toPropertyInfo.bind(this);
    this.up = this.up.bind(this);
    this.down = this.down.bind(this);
  }

  public up(): void { }
  public down(propertyInfo : PropertyInfo): void {
    const rootNode = new PropertyNode(propertyInfo, null);
    this._root = rootNode;
    this.mount(propertyInfo.value);
  }

  public mount(props: object) {
    const propertyInfos = Object.entries(props).map(this.toPropertyInfo);

    //connect to root
    propertyInfos.forEach(propertyInfo =>
      this._root.add(new PropertyNode<PropertyInfo>(propertyInfo, this._root))
    );

    //subscribe to tree navigation
    propertyInfos.forEach(propertyInfo =>
      propertyInfo.control.on("dive", ()=>this.down(propertyInfo))
    );

    this.emit("changed", this._root);
  }

  private toPropertyInfo([key, value]: [string, any]): PropertyInfo {
    const controlInstance = this.getResolvedControlInstance(value);
    return new PropertyInfo(key, "/", value, controlInstance);
  }

  private chooseControlType(propertyValue: any) {
    switch (typeof propertyValue) {
      case "number":
        return IntegerControl;
      case "string":
        return StringControl;
      case "boolean":
        return BoolControl;
      case "object":
        return ObjectControl;
      default:
        return StringControl;
    }
  }

  private getResolvedControlInstance(value: any) {
    const ControlType = this.chooseControlType(value);
    const controlInstance = new ControlType(value);
    return controlInstance;
  }
}
