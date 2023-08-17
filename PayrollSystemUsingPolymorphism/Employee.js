"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    constructor(first, last, ssn) {
        this.firstName = "";
        this.lastName = "";
        this.socialSecurityNumber = "";
        this.firstName = first;
        this.lastName = last;
        this.socialSecurityNumber = ssn;
    }
    setFirstName(first) {
        this.firstName = first;
    }
    getFirstName() {
        return this.firstName;
    }
    setLastName(last) {
        this.lastName = last;
    }
    getLastName() {
        return this.lastName;
    }
    setSocialSecurityNumber(ssn) {
        this.socialSecurityNumber = ssn;
    }
    getSocialSecurityNumber() {
        return this.socialSecurityNumber;
    }
    display() {
        return `${this.getFirstName()}, ${this.getLastName()}, ${this.getSocialSecurityNumber()}`;
    }
}
exports.default = Employee;
