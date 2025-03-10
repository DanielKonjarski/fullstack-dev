export class Customer {
    private firstName: string;
    private lastName: string;
    private _age: number;

    constructor(first: string, last: string, age: number) {
        this.firstName = first;
        this.lastName = last;
        this._age = age;
    }

    greeter() {
        console.log(`Hello, ${this.firstName} ${this.lastName}`);
    }

    getAge() {
        console.log(`Age: ${this._age}`);
    }
}
