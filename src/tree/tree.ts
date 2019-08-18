export class PropertyNode<T> {
  constructor(
    public property: T,
    public parent: PropertyNode<T> | null,
    public children: PropertyNode<T>[] = []
  ) {}

  public add(child: PropertyNode<T>) {
    this.children.push(child);
  }

  public clear() {
    this.children = [];
  }

  public setProperty(property: T) {
    this.property = property;
  }
}
