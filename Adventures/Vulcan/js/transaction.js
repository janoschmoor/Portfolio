
export default class Transaction {
    constructor(sender, reciever, amount) {
        this.sender = sender;
        this.reciever = reciever;
        this.amount = amount;
        this.timeStamp = Date.now();
    }
}