"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shape = void 0;
class Shape {
    constructor(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    getInfo() {
        return `x = ${this._x}, y = ${this._y}`;
    }
    get _getx() {
        return this._x;
    }
    get _gety() {
        return this._y;
    }
}
exports.Shape = Shape;
