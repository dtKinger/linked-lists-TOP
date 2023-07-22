const LinkedList = require('./LinkedList')

const list = new LinkedList();

// null
list.addToStart(10);
list.addToStart(20);
list.addToStart(30);
list.addToEnd(40);
list.addToStart(50);

console.log(list.toString())


// list.addToEnd(50);
// console.log(list);




