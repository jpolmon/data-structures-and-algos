let beasts = ["Centaur", "Godzilla", "Mosura", "Minotaur", "Hydra", "Nessie"];

// Built-in linear searches
beasts.indexOf("Godzilla"); // index

beasts.findIndex(function (item) {
  // index
  return item === "Godzilla";
});

beasts.find(function (item) {
  // value
  return item === "Godzilla";
});

beasts.includes("Godzilla"); // value

//       9
//   4       20
// 1   6  15   170

// InOrder: [1, 4, 6, 9, 15, 20, 170] Gives values in order if using a binary tree
// PreOrder: [9, 4, 1, 6, 20, 15, 170] Useful to recreate a tree
// PostOrder: [1, 6, 4, 15, 170, 20, 9]

// Breadth First Search: [9, 4, 20, 1, 6, 15, 170]
// Depth First Search: [9, 4, 1, 6, 20, 15, 170]

// If you know a solution is not far from the root of the tree:
// BFS

// If the tree is very deep and solutions are rare:
// BFS (DFS will take a long time)

// If the tree is very wide:
// DFS (BFS will need too much memory)

// If solutions are frequent but located deep in the tree:
// DFS

// Determining whether a path exists between two nodes:
// DFS

// Finding the shortest path:
// BFS

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

  breadthFirstSearch() {
    let currentNode = this.root;
    let list = [];
    let queue = [];
    queue.push(currentNode);

    while (queue.length > 0) {
      currentNode = queue.shift();
      list.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }

    return console.log(list);
  }

  breadthFirstSearchR(queue, list) {
    if (!queue.length) {
      return console.log(list);
    }
    let currentNode = queue.shift();
    list.push(currentNode.value);
    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
    return this.breadthFirstSearchR(queue, list);
  }

  DFSInOrder() {
    return console.log(traverseInOrder(this.root, []));
  }

  DFSPostOrder() {
    return console.log(traversePostOrder(this.root, []));
  }

  DFSPreOrder() {
    return console.log(traversePreOrder(this.root, []));
  }
}

function traverseInOrder(node, list) {
  if (node.left) {
    traverseInOrder(node.left, list);
  }
  list.push(node.value);
  if (node.right) {
    traverseInOrder(node.right, list);
  }
  return list;
}

function traversePreOrder(node, list) {
  list.push(node.value);
  if (node.left) {
    traversePreOrder(node.left, list);
  }
  if (node.right) {
    traversePreOrder(node.right, list);
  }
  return list;
}

function traversePostOrder(node, list) {
  if (node.left) {
    traversePostOrder(node.left, list);
  }
  if (node.right) {
    traversePostOrder(node.right, list);
  }
  list.push(node.value);
  return list;
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

// tree.breadthFirstSearch();
// tree.breadthFirstSearchR([tree.root], []);
tree.DFSInOrder();
tree.DFSPreOrder();
tree.DFSPostOrder();
