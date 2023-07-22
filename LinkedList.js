class LinkedList {
  constructor(){
    this.head = null
    this.length = 0;
  }
// Take the current head of our array and 
// replace it, and then we need to add a new linked list 
// that is going to reference that old head.
  prepend(data) {
    const newNode = new Node(data, this.head)
    this.head = newNode;
    this.length += 1
  }

}

class Node {
  constructor (value, next) {
    this.value = value
    this.next = next
  }
}

LinkedList.makeNodes = function (...values) {
  const list = new LinkedList();
  for (let i = values.length -1; i >= 0; i -= 1){
    list.prepend(values[i])
  }
  return list
}

module.exports = LinkedList