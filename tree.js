class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return;
    } else {
      let currentNode = this.root;
      let cycle = true;
      while (cycle) {
        if (value > currentNode.value) {
          currentNode.right
            ? (currentNode = currentNode.right)
            : ((currentNode.right = newNode), (cycle = false));
        } else {
          currentNode.left
            ? (currentNode = currentNode.left)
            : ((currentNode.left = newNode), (cycle = false));
        }
      }
    }
  }

  lookup(value) {
    if (!this.root) {
      return console.log(false);
    }
    let currentNode = this.root;
    while (true) {
      if (value === currentNode.value) {
        return console.log(true);
      } else {
        if (value > currentNode.value) {
          if (currentNode.right) {
            currentNode = currentNode.right;
          } else {
            return console.log(false);
          }
        } else {
          if (currentNode.left) {
            currentNode = currentNode.left;
          } else {
            return console.log(false);
          }
        }
      }
    }
  }

  remove(value) {
    if (!this.root) {
      return console.log("tree is already empty!");
    }
    if (value === this.root.value && !this.root.left && !this.root.right) {
      this.root = null;
      return console.log("tree is now empty");
    }
    let currentNode = this.root;
    while (true) {
      if (value > currentNode.value && currentNode.right) {
        let parent = currentNode;
        currentNode = currentNode.right;
        let successor = currentNode.right;
        if (currentNode.value === value) {
          if (!currentNode.left && !currentNode.right) {
            parent.right = null;
            return console.log("deleted leaf node");
          } else if (!currentNode.right) {
            parent.right = currentNode.left;
            return console.log("deleted node with one child");
          } else if (!currentNode.left) {
            parent.right = currentNode.right;
            return console.log("deleted node with one child");
          } else {
            if (
              (successor.right && successor.left && currentNode.left) ||
              (currentNode.left && successor.left && !successor.right)
            ) {
              parent.right = successor.left;
              parent.right.right = successor;
              parent.right.left = currentNode.left;
              return console.log("node removed;");
            } else {
              parent.right = currentNode.right;
              parent.right.left = currentNode.left;
              return console.log("node removed;");
            }
          }
        }
      } else {
        let parent = currentNode;
        currentNode = currentNode.left;
        let successor = currentNode.right;
        if (currentNode.value === value) {
          if (!currentNode.left && !currentNode.right) {
            parent.right = null;
            return console.log("deleted leaf node");
          } else if (!currentNode.right) {
            parent.right = currentNode.left;
            return console.log("deleted node with one child");
          } else if (!currentNode.left) {
            parent.right = currentNode.right;
            return console.log("deleted node with one child");
          } else {
            if (
              (successor.right && successor.left && currentNode.left) ||
              (successor.left && currentNode.left & !successor.right)
            ) {
              parent.left = successor.left;
              parent.left.right = successor;
              parent.left.left = currentNode.left;
              return console.log("node removed;");
            } else {
              parent.left = currentNode.right;
              parent.left.left = currentNode.left;
              return console.log("node removed;");
            }
          }
        }
      }
    }
  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(JSON.stringify(traverse(tree.root)));
tree.lookup(20);
tree.lookup(45);
tree.remove(170);
console.log(JSON.stringify(traverse(tree.root)));

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
