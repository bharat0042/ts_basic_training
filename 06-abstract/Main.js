"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Circle_1 = require("./Circle");
const Rect_1 = require("./Rect");
let theShapes = [];
let two = new Circle_1.Circle(10, 20, 40);
let three = new Rect_1.Rect(10, 20, 90);
theShapes.push(two);
theShapes.push(three);
for (let temp of theShapes) {
    console.log(temp.getInfo());
    console.log("area = " + temp.getArea());
    console.log();
}
