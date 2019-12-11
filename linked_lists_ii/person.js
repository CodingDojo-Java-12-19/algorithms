class Node {

    // name

    // bestFriend

    // give birth to a Node!
    constructor(name) {
        // 
        this.value = name; // 
        this.next = null; // Node
    }
}

class SLL {
    constructor() {
        this.head = null; // Node
    }
    addFront(value) {
        // 1) consruct new node
        var node = new Node(value);
        // 2) connect new node to head
        node.next = this.head;
        // 3) connect head to new node
        this.head = node;
    }
    removeFront() {
        
    }
    // update() ??
    // insertAt(pos)
}
var myList = new SLL();
myList.addFront("Tacos");


var tramble = new Node("Tramble");
var jocelyn = new Node("Jocelyn")
var tanner = new Node("Tanner");
var drew = new Node("Drew");
var devon = new Node("Devon")

devon.next = tramble;
tramble.next = jocelyn;
jocelyn.next = tanner;
tanner.next = drew;
