export class BaseControl<TValue> {

  constructor(protected value: TValue) {}

  public getValue(): TValue { return this.value; }

}