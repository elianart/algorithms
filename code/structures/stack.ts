export class Stack<T> {
    private array: Array<T> = null;
    private nextI: number = null;
    private lastI: number = null;
    
    constructor(size: number) {
        this.array = new Array<T>(size);
        this.lastI = size - 1;
        this.nextI = this.lastI;
    }

    public Push(value: T){
        if(this.nextI < 0){
            throw "Out of Array exception"
        }
        this.array[this.nextI] = value;
        this.nextI -= 1;
    }

    public Pop(){
        this.nextI +=1;
        if(this.nextI > this.lastI){
            throw "Out of Array exception"
        }

        return this.array[this.nextI];
    }
}