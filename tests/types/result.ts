export class Result < T > {
    constructor(func: () => T, estimated: T) {
        this.estimated = estimated;
        this.func = func;
    }
    public func: () => T;
    public estimated: T;
    public result: T;
    public get isOk(): boolean {
        var that = this;
        if (Array.isArray(this.estimated)) {
            if (!Array.isArray(this.result)) {
                return false;
            }
            if (this.estimated.length !== this.result.length) {
                return false;
            }
            if (this.estimated.length == 0) {
                return true;
            }

            if(typeof(this.estimated[0]) !== 'object'){
                return this.estimated.toString() === this.result.toString();
            }

            return this.estimated.every((value, index) => {
                let keys = Object.keys(value as unknown as object);
                return keys.every((element => {
                    return value[element] === that.result[index][element];
                }).bind(that));
            });
        } 
        if(typeof (this.estimated) === 'object' &&
            this.result != null &&
            this.estimated != null) {
            let keys = Object.keys(this.estimated as unknown as object);
            return keys.every((element => {
                return that.estimated[element] === that.result[element];
            }).bind(that));
        }
        return this.estimated === this.result;
    }

    public Run() {
        if (this.func == null)
            throw 'tested functioon cant be null!';
        this.result = this.func();
        return this._toString();
    }
    private _toString() {
        var that = this;
        if(typeof (this.estimated) === 'object' &&
            this.result != null &&
            this.estimated != null) {
                let keys = Object.keys(this.estimated as unknown as object);
                return keys.map(element => 
                    `\n estimated ${that.estimated[element]}` +
                    `\n result ${that.result[element]}` +
                    `\n ${that.estimated[element]} === ${that.result[element]}`
                ).toString();
        }
        return `\n estimated: ${this.estimated}` +
            `\n result: ${this.result}` +
            `\n isOk ${this.isOk}`;
    }
}