export class Node {
    constructor(  public left: Node,
        public right: Node,
        public value: number) {
        
    }
    public toString() {
        return `left: ${this.left}, right: ${this.right}, value: ${this.value}`;
    }
}

export class BinaryTree {
    public static findNode(tree: Node, value: number): Node {
        if (tree == null) {
            return null;
        }

        var node = tree;
        while(node.value !== value) {
            if(node.value == null){
                return null;
            }

            if(node.value > value){
                node = node.left;
                continue;
            }
            node = node.right;
        }
        return node;
    }
}