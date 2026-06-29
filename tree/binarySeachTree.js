class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    // top node
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      // here we need to traverse
      let currNode = this.root;
      while (true) {
        if (value < currNode.value) {
          // left
          if (!currNode.left) {
            currNode.left = newNode;
            return this;
          } else {
            // go into the left
            currNode = currNode.left;
          }
        } else {
          // right (value > currNode.value)
          if (!currNode.right) {
            currNode.right = newNode;
            return this;
          } else {
            currNode = currNode.right;
          }
        }
      }
    }
  }

  lookup(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (value == currentNode.value) {
        return currentNode;
      }
    }
    return false;
  }

  remove(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;

    while (currentNode) {
      if (value < currentNode.value) {
        // left
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        // right
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (value === currentNode.value) {
        // opt 1 - no right child
        if (currentNode.right == null) {
          if (parentNode == null) {
            this.root = currentNode.left;
          } else {
            // if parent > current value, make current left child a child of parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }
        } else if (currentNode.right.left == null) {
          // opt 2 - right child which doesnt have a left child
          if (parentNode == null) {
            this.root = currentNode.left;
          } else {
            currentNode.right.left = currentNode.left;
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }
        } else {
          // opt 3 - right child that has a left child
          let leftmost = currentNode.right.left;
          let leftMostParent = currentNode.right;
          while (leftmost.left != null) {
            leftMostParent = leftmost;
            leftmost = leftmost.left;
          }

          leftMostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
        return true;
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
tree.lookup(9);
console.log(tree.remove(170));

// console.log(JSON.stringify(tree.lookup(20)));

console.log(JSON.stringify(traverse(tree.root)));

//        9
//    4      20
//  1   6  15  170

// traverse(node) percorre uma árvore binária recursivamente usando DFS(depth-first search).
// Para cada nó:
// 1. Cria um objeto { value } com o valor do nó atual
// 2. Chama traverse(node.left) — desce toda a subárvore esquerda até null
// 3. Só depois chama traverse(node.right) — desce toda a subárvore direita
// 4. Retorna o objeto com left e right já montados
// O resultado é uma cópia espelhada da árvore original como objetos JS aninhados.
// Ordem de execução: esquerda completa → direita completa → retorna para o pai.
function traverse(node) {
  const currtree = { value: node.value };

  currtree.left = node.left === null ? null : traverse(node.left);

  currtree.right = node.right === null ? null : traverse(node.right);

  return currtree;
}
