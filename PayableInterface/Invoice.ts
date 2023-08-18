import Payable from "./Payable";

class Invoice implements Payable {

    private partNumber: string = "";
    private partDescription: string = "";
    private quantity: number = 0;
    private pricePerItem: number = 0;

    constructor(part: string, description: string, count: number, price: number) {
        this.partNumber = part;
        this.partDescription = description;
        this.setQuantity(count);
        this.setPricePerItem(price);
    }

    setPartNumber(part: string) {
        this.partNumber = part;
    }

    getPartNumber() {
        return this.partNumber;
    }


    setPartDescription(part: string) {
        this.partNumber = part;
    }

    getPartDescription() {
        return this.partDescription;
    }


    setQuantity(count: number) {
        if (count >= 0) {
            this.quantity = count;
        }
    }

    getQuantity() {
        return this.quantity;
    }

    setPricePerItem(price: number) {
        if (price >= 0) {
            this.pricePerItem = price;
        } else {
            console.log("Price per item must be >= 0");
        }
    }

    getPricePerItem() {
        return this.pricePerItem;
    }

    toString(): string {
        return `Invoice ${this.getPartNumber()}, part number: ${this.getPartDescription()} quantity: ${this.getQuantity()}, Price per item ${this.getPricePerItem()}`
    }

    getPaymentAmount(): number {
        return this.getQuantity() * this.getPricePerItem();
    }

}

export default Invoice;