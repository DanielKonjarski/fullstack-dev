class Customer {
    private firstName: string;
    private lastName: string;

    constructor(first: string, last: string) {
        this.firstName = first;
        this.lastName = last;
    }

    greeter() {
        console.log(`Hello, ${this.firstName} ${this.lastName}`);
    }
}

let customer1 = new Customer("Bob", "Smith");
customer1.greeter();
