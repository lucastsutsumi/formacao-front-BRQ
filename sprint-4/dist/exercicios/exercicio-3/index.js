"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sum(a, b) {
    return a + b;
}
let items = [];
items.push('10', '12', '15', '20', '22');
items.forEach((item) => console.log(`O valor ${item} somado com 1 = ${sum(item, 1)}`));
