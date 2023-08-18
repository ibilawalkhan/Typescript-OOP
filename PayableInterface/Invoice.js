"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Invoice {
    constructor(part, description, count, price) {
        this.partNumber = "";
        this.partDescription = "";
        this.quantity = 0;
        this.pricePerItem = 0;
        this.partNumber = part;
        this.partDescription = description;
        this.setQuantity(count);
        this.setPricePerItem(price);
    }
    setPartNumber(part) {
        this.partNumber = part;
    }
    getPartNumber() {
        return this.partNumber;
    }
    setPartDescription(part) {
        this.partNumber = part;
    }
    getPartDescription() {
        return this.partDescription;
    }
    setQuantity(count) {
        if (count >= 0) {
            this.quantity = count;
        }
    }
    getQuantity() {
        return this.quantity;
    }
    setPricePerItem(price) {
        if (price >= 0) {
            this.pricePerItem = price;
        }
        else {
            console.log("Price per item must be >= 0");
        }
    }
    getPricePerItem() {
        return this.pricePerItem;
    }
    toString() {
        return `Invoice ${this.getPartNumber()}, part number: ${this.getPartDescription()} quantity: ${this.getQuantity()}, Price per item ${this.getPricePerItem()}`;
    }
    getPaymentAmount() {
        return this.getQuantity() * this.getPricePerItem();
    }
}
exports.default = Invoice;
