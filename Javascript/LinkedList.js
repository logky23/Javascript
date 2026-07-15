class LinkedList {
    constructor() {
        this.head = null;
    }

    addAtHead(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
    }

    deleteHead() {      // O(1)
        if (!this.head) return;
        this.head = this.head.next;
    }
}

class Node  {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

let arr = [];
for (let i = 0; i < 1_000_000; i++) arr.push(i);

console.time("Array pop O(1)");
for (let i = 0; i < 1_000_000; i++) {
    arr.pop();          // O(1)
}
console.timeEnd("Array pop O(1)");

// let arr2 = [];
// for (let i = 0; i < 200_000; i++) arr2.push(i);

// console.time("Array shift O(n)");
// for (let i = 0; i < 200_000; i++) {
//     arr2.shift();       // O(n) – shifts whole array every time
// }
// console.timeEnd("Array shift O(n)");

let list = new LinkedList();
for (let i = 0; i < 1_000_000; i++) list.addAtHead(i);

console.time("LinkedList deleteHead O(1)");
for (let i = 0; i < 1_000_000; i++) {
    list.deleteHead();  // O(1)
}
console.timeEnd("LinkedList deleteHead O(1)");

