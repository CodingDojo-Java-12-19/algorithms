// BST: Add
// Create an add(val) method on the BST object to add new value to the tree. This entails creating a BTNode with this value and connecting it at the appropriate place in the tree.
// Unless specified otherwise, BSTs can contain duplicate values.”
// Excerpt From: Martin Puryear. “Algorithm Challenges: E-book for Dojo Students.” Apple Books. 

// function Root(nodin) {
//     let self= this;
//     let left;
//     let right;
// }
// function add(val) {
    
// }
// console.log(add())

class Tree {
    constructor(nodin) {
        this.root = null;
        // this.left = null;
        // this.right = null;
    }
    add(val) {
        const node = new BNode(val);
        if(this.root === null) {
            this.root = node;
        } else {
            let runner = this.root;
            while(runner) {
                if(node.value >= runner.value){
                    if(runner.right === null){
                        runner.right = node;
                        break;
                    }
                    runner = runner.right;
                } else {
                    if(runner.left === null){
                        runner.left = node;
                        break;
                    }
                    runner = runner.left;
                }
            }
        }
        return this;
    };

    add2(value) { 
        const node = new BNode(value);
        if(this.root === null) {
            this.root = node;
        } else {
            this.root.add2(node);
        }
    }
// BST: Min
// Create a min() method on the BST class that returns the smallest value found in the BST”
// Excerpt From: Martin Puryear. “Algorithm Challenges: E-book for Dojo Students.” Apple Books. 
    min() {
        if(this.root === null) {
            return null;
        } else {
            return this.root.min();
        }
    }
    contains(val) {
        if(this.root === null) {
            return null;
        } else {
            return this.root.contains(val);
        }
    }
    // BST: Contains
    // Create a contains(val) method on BST that returns whether the tree contains a given value.
    // Take advantage of the BST structure to make this a much more rapid operation than SList.contains() would be.”
    // Excerpt From: Martin Puryear. “Algorithm Challenges: E-book for Dojo Students.” Apple Books. 
}

class BNode {
    constructor(Bnodin) {
        this.value = Bnodin;
        this.left = null;
        this.right = null;
    }
    add2(node) {
        if(node.value >= this.value){
            if(this.right === null){
                this.right = node;
            } else {
                this.right.add2(node);
            }
        } else {
            if(this.left === null){
                this.left = node;
            } else {
                this.left.add2(node);
            }
        }
    }
    min() {
        if(this.left !== null) {
            return this.left.min();
        } else {
            return this.value;
        }
    }
    contains(val) {
        if(this.value === val){
            return true;
        }
        if(this.value > val) {
            if(this.left !== null){
                return this.left.contains(val);
            }
        } else {
            if(this.right !== null) {
                return this.right.contains(val);
            }
        }
        return false;
    }
}

const BTree = new Tree();
const B2Tree = new Tree();

B2Tree.add(10);
B2Tree.add(15);
B2Tree.add(5);
B2Tree.add(20);
B2Tree.add(3);

console.log(B2Tree.min());
console.log(B2Tree.contains(5));
console.log(B2Tree.contains(20));
console.log(B2Tree.contains(25));

// BTree.add(10);
// BTree.add(15);
// BTree.add(5);
// BTree.add(20);

console.log(B2Tree);
