export class DemoClass {
    private _name : string;
    private _truth : boolean;

    constructor(name : string, truth : boolean) {
        this._name = name;
        this._truth = truth;
    }

    public get name() : string {
        return this._name;
    }

    public get truth() : boolean {
        return this._truth;
    }
}

let test = new DemoClass("bharat", false);
console.log(test.name);
console.log(test.truth);


