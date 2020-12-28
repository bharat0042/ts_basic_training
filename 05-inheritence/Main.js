"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Shape_1 = require("./Shape");
const Circle_1 = require("./Circle");
const Rect_1 = require("./Rect");
let theShapes = [];
let one = new Shape_1.Shape(5, 10);
let two = new Circle_1.Circle(10, 20, 40);
let three = new Rect_1.Rect(10, 20, 90);
theShapes.push(one);
theShapes.push(two);
theShapes.push(three);
for (let temp of theShapes) {
    console.log(temp.getInfo());
}
