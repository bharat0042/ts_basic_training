class Check {
    private _lenght : number = 0;

    public get square() : number {
        return this._lenght*this._lenght;
    }

    public set length(length : number) {
        this._lenght = length;
    }
}

let check  = new Check();
check.length = 5;
console.log(check.square);