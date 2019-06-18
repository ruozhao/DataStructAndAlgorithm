class Set {
    constructor() {
        this.items = {};
    }

    /* for ES6
    has(element) {
        return element in items;
    }
    */
    has(element) {
        return Object.prototype.hasOwnProperty.call(this.items, element);
    }

    add(element) {
        if(!this.has(element)) {
            this.items[element] = element;
            return true;
        }
        return false;
    }
    delete(element) {
        if(!this.has(element)) {
            return false;
        }
        delete this.items[element];
        return true;
    }

    clear() {
        this.items = {};
    }

    size() {
        let len = 0;
        for(let i in this.items) {
            if(this.items.hasOwnProperty(i)) {        // should avoid the Object attributes
                len++;
            }
        }
        return len;
    }

    values() {
        let valuesSet = [];
        for(let i in this.items) {
            if(this.items.hasOwnProperty(i)) {
                valuesSet.push(i);
            }
        }
        return valuesSet;
    }

    unionES6(otherSet) {
        let unionSet = new Set();
        this.values().forEach((value) => unionSet.add(value));
        otherSet.values().forEach((value) => unionSet.add(value));
        return unionSet;
    }

    interSection(otherSet) {
        let interSet = new Set();
        const values = this.values();
        const otherValues = otherSet.values();

        let biggerValus = values;
        let smallerValues = otherValues;
        if(biggerValus.length < smallerValues.length) {
            biggerValus = otherValues;
            smallerValues = values;
        }

        smallerValues.forEach((value) => {
            if(biggerValus.indexOf(value) !== -1)
                interSet.add(value);
        });
        return interSet;
    }

    difference(otherSet) {
        let differentSet = new Set();
        this.values().forEach((value) => {
            if(!otherSet.has(value)) {
                differentSet.add(value);
            }
        });
        return differentSet;
    }

    isSubsetOf(otherSet) {
        if(this.size() < otherSet.size()) {
            return false;
        }
        let isSubset = false;
        isSubset = otherSet.values().every(value => {
            return this.has(value) ? true : false;
        });
        return isSubset;
    }
}


let setTest = new Set();
setTest.add(1);
console.log(setTest);

setTest.add(5);
setTest.add(10);
console.log(setTest);
console.log(setTest.values());

setTest.delete(20);
console.log(setTest.values());

setTest.delete(10);
console.log(setTest.values());

const setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);

const setB = new Set();
setB.add(2);
setB.add(3);
setB.add(4);

const unionAB = setA.unionES6(setB);
console.log(unionAB);

const insertAB = setA.interSection(setB);
console.log(insertAB);

const differentAB = setA.difference(setB);
console.log(differentAB);


console.log(setA.isSubsetOf(insertAB));   // true
console.log(setB.isSubsetOf(insertAB));   // true
console.log(setB.isSubsetOf(unionAB));    // false
console.log(setA.isSubsetOf(differentAB));   // true
console.log(setB.isSubsetOf(differentAB));   // false



function fibonacciMemoization(n) {
    const memo = [0, 1];
    const fibonacci = ((n) => {
        if(memo[n] != null)
            return memo[n];
        return fibonacciMemoization(n - 1, memo) + fibonacciMemoization(n - 2, memo);
    });
    return fibonacci;
}

console.log(fibonacciMemoization(5));
