import {Shape} from './Shape'

export class Circle extends Shape  {

    constructor(_x : number,_y : number, private _radius : number) {
        super(_x, _y);
    }

    public getInfo() : string {
        return super.getInfo() + `, radius = ${this._radius}`;
    }

    public getArea(): number {
        return Math.PI * Math.pow(this._radius, 2);
    }
}