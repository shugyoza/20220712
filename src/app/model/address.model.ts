export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string
}

export class Address implements Address {
    constructor(street, suite, city, zipcode) {
        this.street = street;
        this.suite = suite;
        this.city = city;
        this.zipcode = zipcode
    }
}
