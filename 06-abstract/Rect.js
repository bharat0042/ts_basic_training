"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rect = void 0;
const Shape_1 = require("./Shape");
class Rect extends Shape_1.Shape {
    constructor(_x, _y, prop) {
        super(_x, _y);
        this.prop = prop;
    }
    getInfo() {
        return super.getInfo() + `, num = ${this.prop}`;
    }
    getArea() {
        return this._getx * this._gety;
    }
}
exports.Rect = Rect;
