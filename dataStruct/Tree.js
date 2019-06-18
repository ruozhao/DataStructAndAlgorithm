class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}
function defaultCompare(a, b) {
  return a - b;
}

class BinaritySearchTree {
    constructor(compareFn = defaultCompare) {
        this.root = null;
        this.compareFn = compareFn;
    }
    insert(key) {
        if(this.root == null) {
            this.root = new Node(key);
            console.log(`this.root is ${this.root.key}`);
        } else {
            this.insertNode(this.root, key);
        }
    }
    insertNode(node, key) {
        if(key < node.key) {
            if(node.left == null) {
                node.left = new Node(key);
                console.log(`${node.key} left is ${node.left.key}`);
            } else {
                this.insertNode(node.left, key);
            }
        } else {
            if(node.right == null) {
                node.right = new Node(key);
                console.log(`${node.key} right is ${node.right.key}`);
            } else {
                this.insertNode(node.right, key);
            }
        }
    }
    inorder() {
        if(this.root == null) {
            consolr.log("This is an empty tree");
        } else {
            this.inorderTravesal(this.root);
        }
    }

    inorderTravesal(node) {
        if(node != null) {
            this.inorderTravesal(node.left);
            this.toString(node);
            this.inorderTravesal(node.right);
        }
    }

    preorder() {
        if(this.root == null) {
            console.log("this is an empty tree");
        }
        else
            this.preorderTravesal(this.root);
    }
    preorderTravesal(node) {
        if(node != null) {
            this.toString(node);
            this.preorderTravesal(node.left);
            this.preorderTravesal(node.right);
        }
    }
    postorder() {
        if(this.root == null) {
            console.log("this is an empty tree");
        } else {
            this.postorderTravesal(this.root);
        }
    }
    postorderTravesal(node) {
        if(node != null) {
            this.postorderTravesal(node.left);
            this.postorderTravesal(node.right);
            this.toString(node);
        }
    }
    min() {
        let min;
        if(this.root == null) {
            console.log("this is an empty BST");
        }
        else{
            min = this.minNode(this.root);
        }
        this.toString(min);
    }
    minNode(node) {
        let current = node;
        while((current != null) && (current.left != null)){
            current = current.left;
        }
        return current;
    }
    max() {
        let max;
        max = this.maxNode(this.root);
        this.toString(max);
    }
    maxNode(node) {
        let current = node;
        while((current != null) &&(current.right != null)) {
            current = current.right;
        }
        return current;
    }
    search(key) {
        return this.searchElement(this.root, key);
    }
    searchElement(node, key) {
        if(node == null) {
            return false;
        }
        if(key < node.key) {
            return this.searchElement(node.left, key);
        } else if(key > node.key){
            return this.searchElement(node.right, key);
        } else {
            return true;
        }
    }

    toString(node) {
        let strTree = "" + node.key;
        console.log(strTree);
    }
}

console.log("This is the BST");
const treeJs = new BinaritySearchTree();
treeJs.insert(10);
treeJs.insert(4);
treeJs.insert(6);
treeJs.insert(9);
treeJs.insert(3);

console.log("1. inorder travesal");
treeJs.inorder();

console.log("2. preorder travesal");
treeJs.preorder();

console.log("3. postorder travesal");
treeJs.postorder();

console.log("4. min node is ");
treeJs.min();

console.log("5. max node is ");
treeJs.max();

console.log(`6. The 4 is in|not this tree ?`);
console.log(treeJs.search(4) ? "Key4 is in tree" : "Key4 is not in");
console.log(`7. The 8 is in|not this tree ?`);
console.log(treeJs.search(8) + "");