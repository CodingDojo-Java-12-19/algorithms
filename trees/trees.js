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
}

class BNode {
    constructor(Bnodin) {
        this.value = Bnodin;
        this.left = null;
        this.right = null;
    };
}

const BTree = new Tree();

BTree.add(10);
BTree.add(15);
BTree.add(5);
BTree.add(20);

console.log(BTree);
