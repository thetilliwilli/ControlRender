export class TreeNode<T> {
  constructor(
    public value: T,
    public parent: TreeNode<T> | null,
    public children: TreeNode<T>[] = []
  ) {}

  public add(child: TreeNode<T>) {
    this.children.push(child);
  }
}
