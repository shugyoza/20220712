import { Address } from './address.model';

export interface Person {
    id?: number;
    name: string;
    username: string;
    email: string;
    address: Address
}

export class Person implements Person {
    constructor(id: number, name: string, username: string, email: string, address: Address) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = address;
    }
}
