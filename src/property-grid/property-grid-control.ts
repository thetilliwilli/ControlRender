import { PropertyNode } from "../tree/tree";
import { PropertyInfo } from "./property-info";
import { IntegerControl } from "../control/integer-control";
import { StringControl } from "../control/string-control";
import { BoolControl } from "../control/bool-control";
import { SubsetControl } from "../control/subset-control";
import { ObjectControl } from "../control/object-control";
import { BaseControl } from "../control/base";

export class PropertyGridControl extends BaseControl<
  PropertyNode<PropertyInfo>
> {
  constructor() {
    //hacky: needs find another way
    const rootNode = new PropertyNode(
      new PropertyInfo("", "/", null, new IntegerControl(0)),
      null
    );

    super(rootNode);

    this.toPropertyInfo = this.toPropertyInfo.bind(this);
    this.upLevel = this.upLevel.bind(this);
    this.downLevel = this.downLevel.bind(this);
  }

  public upLevel(): void {
    if (this._value.parent === null) return;
    this._value = this._value.parent;
    this.mount(this._value.property.value);
  }

  public downLevel(propertyNode: PropertyNode<PropertyInfo>): void {
    this._value = propertyNode;
    this.mount(this._value.property.value);
  }

  public mount(props: object) {
    this._value.property.value = props;

    const propertyInfos = Object.entries(props).map(this.toPropertyInfo);

    //connect to root
    propertyInfos.forEach(propertyInfo => {
      if (
        this._value.children.find(x => x.property.key === propertyInfo.key) ===
        undefined
      )
        this._value.add(new PropertyNode(propertyInfo, this._value));
    });

    //subscribe to tree navigation
    this._value.children.forEach(propertyNode =>
      propertyNode.property.control.on("dive", () =>
        this.downLevel(propertyNode)
      )
    );

    this.emit("changed", this._value);
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
