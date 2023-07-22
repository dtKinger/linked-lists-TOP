class LinkedList {
  constructor(){
    this.head = null
    this.length = 0;
  }
// Take the current head of our array and 
// replace it, and then we need to add a new linked list 
// that is going to reference that old head.

  addToStart(data) {
    const newNode = new Node(data, this.head)
    this.head = newNode;
    this.length += 1
  }

  addToEnd(data) {

    if (this.head == null) this.addToStart(data);
    else {
      let temp = this.head
      while (temp.next != null){
        temp = temp.next
      }
      temp.next = new Node(data);
      this.length += 1;
    }
  }

  size () {
    return this.length
  }

  heading () {
    return this.head.value
  }

  tail () {
    if (this.head == null) return null
    else {
      let temp = this.head
      while (temp.next != null){
        temp = temp.next
      }
      return temp;
    }
  }

  getAtIndex (index) {
    // Takes in input
    // return this.(next * input)
    let temp = this.head;
    while (index > 0){ // > not >= because don't get .next on 0. 0 should be temp.next not temp.next.next
      temp = temp.next
      index -= 1;
    }
    return temp.value;
  }

  pop () {
    let tail = tail ()
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
  for (let i = values.length -1; i >= 0; i -= 1){ // We go in reverse order because
    // we're constantly adding to the begining of our list.
    list.addToStart(values[i])
  }
  return list
}

module.exports = LinkedList