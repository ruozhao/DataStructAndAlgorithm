class Queue {
    constructor() {
        this.count = 0;
        this.font = 0;
        this.items = {};
    }

    enqueue(element) {
        this.items[this.count] = element;
        this.count++;
    }
    dequeue() {
        if(this.count == this.font) {
            return undefined;
        }
        let element = this.items[this.font];
        delete this.items[this.font];
        this.font++;
        return element;
    }

    isEmpty() {
        return this.count - this.font === 0;
    }
    size() {
        return this.count - this.font;
    }

    peek() {
        if(this.isEmpty()) {
            return undefined;
        }
        return this.items[this.font];
    }

    clear() {
        this.count = 0;
        this.font = 0;
        this.items = {};
    }

    toString() {
        if(this.isEmpty()) {
            return "";
        }

        let objString = `${this.items[this.font]}`;
        for(let i = this.font + 1; i < this.count; i++) {
            objString = `${objString},${this.items[i]}`;
        }
        return objString;
    }
}

const queueJS = new Queue();
console.log(queueJS.isEmpty());

queueJS.enqueue("Han");
queueJS.enqueue("Lin");
console.log(queueJS.toString());
console.log(queueJS.dequeue());
console.log(queueJS);

// function 1
console.log("=========================================================");
console.log("=====================hotPotato===========================");

function hotPotato(elementList, num) {
    const queueRemind = new Queue();
    const elimitatedList = [];

    for(let i = 0; i < elementList.length; i++) {
        queueRemind.enqueue(elementList[i]);
    }

    while(queueRemind.size() > 1) {
        for(let j = 0; j < num; j++) {
            queueRemind.enqueue(queueRemind.dequeue());
        }
        elimitatedList.push(queueRemind.dequeue());
    }
    return {elimitated: elimitatedList,
        winner: queueRemind.dequeue()
    };
}
const names = ["john", "jack", "camila", "ingrid", "carl"];
let result = hotPotato(names, 7);
result.elimitated.forEach((elimite) => {
    console.log(`${elimite} is outted.`);
});

console.log(`The winner is ${result.winner}`);


// function 2
console.log("=========================================================");

