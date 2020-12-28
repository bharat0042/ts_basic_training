"use strict";
class Check {
    constructor() {
        this._lenght = 0;
    }
    get square() {
        return this._lenght * this._lenght;
    }
    set length(length) {
        this._lenght = length;
    }
}
let check = new Check();
check.length = 5;
console.log(check.square);
