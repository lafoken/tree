class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Вставка вузла в дерево
  insert(value) {
    const newNode = new TreeNode(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // Прямий обхід
  preorder(node, result = []) {
    if (node !== null) {
      result.push(node.value);
      this.preorder(node.left, result);
      this.preorder(node.right, result);
    }
    return result;
  }

  // Симетричний обхід
  inorder(node, result = []) {
    if (node !== null) {
      this.inorder(node.left, result);
      result.push(node.value);
      this.inorder(node.right, result);
    }
    return result;
  }

  // Оборотний обхід
  postorder(node, result = []) {
    if (node !== null) {
      this.postorder(node.left, result);
      this.postorder(node.right, result);
      result.push(node.value);
    }
    return result;
  }
}

// Створення дерева і вставка значень
const bst = new BinarySearchTree();
const values = [
  2, 49, 23, 60, 71, 72, 18, 64, 78, 79, 17, 85, 11, 45, 53, 34, 38, 94, 44, 61,
  6, 46, 33, 16, 3, 58, 94, 72, 50, 8, 52, 59, 96, 53, 36, 70,
];

// Вставка значень у дерево
values.forEach((value) => bst.insert(value));

// Обхід дерева
console.log("Preorder traversal:", bst.preorder(bst.root));
console.log("Inorder traversal:", bst.inorder(bst.root));
console.log("Postorder traversal:", bst.postorder(bst.root));
