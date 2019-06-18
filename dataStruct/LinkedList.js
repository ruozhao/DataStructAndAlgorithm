// import { defaultEquals } from "../util";
// import { LinkedListNode } from "./models/linkedListModels";
// let defaultEquals = require("../util");
// let LinkedListNode = require("./models/linkedListModels");

function defaultEquals(a, b) {
    return a === b;
  }
  class LinkedListNode {
      constructor(element, next) {
          this.element = element;
          this.next = null;
      }
  }
  
  console.log("=====================================================================");
  console.log("=============just for study JS and dataStruct, donot set webpack=====");
  
  // export default class LinkedList {
  class LinkedList {
      constructor(equalsFn = defaultEquals) {
          this.count = 0;
          this.head = undefined;
          this.equalsFn = equalsFn;
      }
  
      isEmpty() {
          return this.count === 0;
      }
      size() {
          return this.count;
      }
      getHead() {
          return this.head;
      }
  
      push(element) {
          const nodeEle = new LinkedListNode(element);
          let current = this.head;
          if(current == null) {
              this.head = nodeEle;
          } else {
              while(current.next != null) {
                  current = current.next;
              }
              current.next = nodeEle;
          }
          this.count++;
      }
  
      getElementAt(index) {
          if(index < 0 || index > this.count) {
              return undefined;
          }
          let current = this.head;
          if(index == 0) {
              return current;
          }
          for(let i = 0; i < index && current != null; i++) {
              current = current.next;
          }
          return current;
      }
  
      removeAt(index) {
          if(index < 0 || index >= this.count) {
              return undefined;
          }
  
          let current = this.head;
          if(index == 0) {
              this.head = current.next;
          } else {
              let prev = this.getElementAt(index - 1);
              current = prev.next;
              prev.next = current.next;
          }
          this.count--;
          return current.element;
      }
  
      pop() {
          let element = this.removeAt(this.count - 1);
          return element;
      }
  
      insert(element, index) {
          if(index < 0) {
              return false;
          }
  
          let nodeLinkEle = new LinkedListNode(element);
          let prev;
          if(index == 0) {
              nodeLinkEle.next = this.head;
              this.head = nodeLinkEle;
          } else if(index >= this.count) {
              prev = this.getElementAt(this.count - 1);
              prev.next = nodeLinkEle;
          } else {
              prev = this.getElementAt(index - 1);
              nodeLinkEle.next = prev.next;
              prev.next = nodeLinkEle;
          }
          this.count++;
          return true;
      }
  
      indexOf(element) {
          if(this.count < 0) {
              return -1;
          }
          let current = this.head;
          for(let i = 0; i < this.count && current != null; i++) {
              if(current.element == element) {
                  return i;
              }
              current = current.next;
          }
          return -1;
      }
  
      remove(element) {
          const pos = this.indexOf(element);
          return this.removeAt(pos);
      }
  
      reverse() {
          if(this.count == 0 || this.count == 1) {
              return this.head;
          }
          let left = this.head;
          let right = this.head;
          while(right.next != null) {
              let current = right;
              right = right.next;
              current.next = left;
              left = current;
          }
          right.next = left;
          this.head = right;
          return;
      }
  
      toString() {
          if(this.count == 0) {
              return "This is an empty linked list";
          }
          let linkedStr = "";
          let current = this.head;
          linkedStr = `${this.head.element}`;
          for(let i = 1; i < this.count && current != null; i++) {
              current = current.next;
              linkedStr = `${linkedStr}, ${current.element}`;
          }
          return linkedStr;
      }
  }
  
  const list = new LinkedList();
  list.push(15);
  list.push(10);
  list.push("han");
  list.push("lin");
  list.push("date");
  console.log(list.toString());
  console.log("=====================================================================");
  
  console.log(list.removeAt(0));
  console.log(list.removeAt(4));
  console.log(list.removeAt(4));
  console.log(list.removeAt(3));
  console.log(list.toString());
  console.log("=====================================================================");
  
  console.log(list.pop());
  console.log(list.pop());
  console.log(list.pop());
  console.log(list.toString());
  console.log("=====================================================================");
  
  list.insert("math", 0);
  list.insert("english", -1);
  list.insert("chainese", 3);
  list.insert("history", 1);
  list.push(3);
  list.push("han");
  list.push("lin");
  list.push("love");
  list.push("sap");
  console.log(list.toString());
  console.log("===============================insert ok================================");
  
  // console.log(list.indexOf("english"));
  // console.log(list.indexOf("chanese"));
  // console.log(list.indexOf("math"));
  // console.log(list.indexOf("history"));
  // console.log(list.toString());
  // console.log("=====================================================================");
  
  // console.log(list.remove("english"));
  // console.log(list.remove("chanese"));
  // console.log(list.remove("math"));
  // console.log(list.remove("history"));
  // console.log(list.toString());
  
  console.log("==========================reverse()======================================");
  list.reverse();
  console.log(list.toString());
  
  