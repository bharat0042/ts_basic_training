import {DemoClass} from "./04-class";


class TestParam {

    constructor(private _length : number, private _name : string) {
    }

    public get square() : number {
        return this._length*this._length;
    }

    public set length(length : number) {
        this._length = length;
    }

    public get getThatName() : string {
        return this._name;
    }
}

let zzzz = new TestParam(21, "jack");
zzzz.length = 25;
console.log(zzzz.getThatName + " " + zzzz.square);
let paz = new DemoClass("jill", false);
console.log(paz.name);