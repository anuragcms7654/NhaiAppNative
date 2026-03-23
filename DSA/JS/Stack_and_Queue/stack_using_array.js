class Stack {
    constructor() {
      this.arr = [];
    }
    isEmpty(){
       return this.arr.length === 0;
    }
    pushInStack(ele){
        this.arr.push(ele);
    }
    popStack(){
        if(this.isEmpty()){
            return "cannot pop, stack is empty"
        }
        let x = this.arr.pop();
        return x;
    }
    top(){
        if(this.isEmpty()){
            return "Stack is empty"
        }
        return this.arr[this.arr.length-1];
    }
    size(){
        return this.arr.length;
    }
}

let stack = new Stack();

stack.pushInStack(4);
stack.pushInStack(4);
stack.pushInStack(4);
stack.popStack();
stack.pushInStack(4);
stack.pushInStack(4);
console.log(stack.size())