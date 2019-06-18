class Stack {
    constructor() {
        this.count = 0;
        this.items = {};
    }

    size() {
        return this.count;
    }
    isEmpty() {
        return this.count === 0;
    }

    push(element) {
        this.items[this.count] = element;
        this.count++;
    }

    pop() {
        if(this.isEmpty()) {
            return undefined;
        }
        this.count--;
        let element = this.items[this.count];
        delete this.items[this.count];
        return element;
    }
    peek() {
        if(this.isEmpty()) {
            return undefined;
        }
        return this.items[this.count - 1];
    }

    clear() {
        this.items = {};
        this.count = 0;
    }

    toString() {
        if(this.isEmpty()) {
            return "";
        }
        let objString = `${this.items[0]}`;
        for(let i = 1; i < this.count; i++) {
            objString = `${objString}, ${this.items[i]}`;
        }
        return objString;
    }
}
// single use
const stackJs = new Stack();
stackJs.push("han");
stackJs.push("lin");
console.log(stackJs);
console.log(stackJs.toString());
console.log("============================================================");

// baseConverter
function baseConverter(decNumber, base) {
    let convertedNumber = new Stack();
    let num = decNumber;
    let strNum = "";
    let digits = "0123456789abcdefghijklmnopqrstuvwxyz";

    if(base < 2 || base > 36) {
        return "";
    }

    while(num > 0) {
        let reminder;
        reminder = Math.floor(num % base);
        convertedNumber.push(reminder);
        num = Math.floor(num / base);
    }

    while(!convertedNumber.isEmpty()) {
        // strNum = strNum + convertedNumber.pop();
        strNum = strNum + digits[convertedNumber.pop()];
    }
    return strNum;
}

console.log(baseConverter(100345, 2));
console.log(baseConverter(100345, 8));
console.log(baseConverter(100345, 10));
console.log(baseConverter(100345, 16));
console.log(baseConverter(100345, 24));
console.log(baseConverter(100345, 36));