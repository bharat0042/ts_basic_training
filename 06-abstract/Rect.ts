import {Shape} from './Shape'

export class Rect extends Shape  {

    constructor(_x : number, _y : number, private prop : number) {
        super(_x, _y);
    }

    public getInfo() : string {
        return super.getInfo() + `, num = ${this.prop}`;
    }

    public getArea(): number {
        return this._getx * this._gety;
    }
}