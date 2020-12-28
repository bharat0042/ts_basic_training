"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoClass = void 0;
class DemoClass {
    constructor(name, truth) {
        this._name = name;
        this._truth = truth;
    }
    get name() {
        return this._name;
    }
    get truth() {
        return this._truth;
    }
}
exports.DemoClass = DemoClass;
let test = new DemoClass("bharat", false);
console.log(test.name);
console.log(test.truth);
