class CustomQueue {
    constructor() {
      this.items = [];
      this.frontIndex = 0;
      this.rearIndex = -1;
      this.maxCapacity = 10; // maximum capacity example
    }
  
    enqueue(item) {
      if (!this.isFull()) {
        this.items[++this.rearIndex] = item;
      } else {
        console.log("The queue is full.");
      }
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return undefined;
      }
      const dequeuedItem = this.items[this.frontIndex];
      delete this.items[this.frontIndex++];
      return dequeuedItem;
    }
  
    peek() {
      if (this.isEmpty()) {
        return undefined;
      }
      return this.items[this.frontIndex];
    }
  
    isEmpty() {
      return this.frontIndex > this.rearIndex;
    }
  
    getSize() {
      return this.rearIndex - this.frontIndex + 1;
    }
  
    isFull() {
      return this.getSize() >= this.maxCapacity;
    }
  
    print() {
      console.log(this.items.slice(this.frontIndex, this.rearIndex + 1));
    }
  }
  
  const customQueue = new CustomQueue();
  customQueue.enqueue(1);
  customQueue.enqueue(2);
  customQueue.enqueue(3);
  customQueue.enqueue(4);
  console.log("Queue size:", customQueue.getSize());
  console.log("First item:", customQueue.peek());
  customQueue.dequeue();
  console.log("Last item:", customQueue.peek());
  customQueue.print();
  
  class CustomStack {
    constructor() {
      this.items = [];
    }
  
    push(item) {
      this.items.push(item);
    }
  
    pop() {
      return this.items.pop();
    }
  
    peek() {
      return this.items[this.items.length - 1];
    }
  
    peekLast() {
      return this.peek();
    }
  
    peekFirst() {
      return this.items[0];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    length() {
      return this.items.length;
    }
  
    isEmpty() {
      return this.isEmpty();
    }
  
    print() {
      console.log(this.items);
    }
  }
  
  const customStack = new CustomStack();
  customStack.push(1);
  customStack.push(2);
  customStack.push(3);
  customStack.push(4);
  console.log("Stack size:", customStack.length());
  console.log("First item:", customStack.peekFirst());
  console.log("Last item:", customStack.peekLast());
  customStack.pop();
  customStack.print();
  