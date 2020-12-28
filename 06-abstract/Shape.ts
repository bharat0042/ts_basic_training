export abstract class Shape {

    constructor(private _x : number,private _y : number) {

    }

    public getInfo() : string {
        return `x = ${this._x}, y = ${this._y}`;
    }

    public get _getx() : number {
        return this._x;
    }

    public get _gety() : number {
        return this._y;
    }

    public abstract getArea() : number;
}