"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _04_class_1 = require("./04-class");
class TestParam {
    constructor(_length, _name) {
        this._length = _length;
        this._name = _name;
    }
    get square() {
        return this._length * this._length;
    }
    set length(length) {
        this._length = length;
    }
    get getThatName() {
        return this._name;
    }
}
let zzzz = new TestParam(21, "jack");
zzzz.length = 25;
console.log(zzzz.getThatName + " " + zzzz.square);
let paz = new _04_class_1.DemoClass("jill", false);
console.log(paz.name);
