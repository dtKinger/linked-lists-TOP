const LinkedList = require('./LinkedList')

const list = new LinkedList();

// null
list.addToStart(20);
list.addToEnd(30);
list.addToEnd(40);
list.addToEnd(50);
list.addToStart(10);

console.log(list.tail())

// list.addToEnd(50);
// console.log(list);




