import {Shape} from './Shape'
import {Circle} from './Circle'
import {Rect} from './Rect'

let theShapes : Shape[] = [];
let one : Shape = new Shape(5, 10);
let two : Circle = new Circle(10, 20, 40);
let three : Rect = new Rect(10, 20, 90);
theShapes.push(one);
theShapes.push(two);
theShapes.push(three);

for(let temp of theShapes) {
    console.log(temp.getInfo());
}