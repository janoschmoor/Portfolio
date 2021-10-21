
export default class Block {
    constructor(id, transactions, parentHash = '') {
        this.id = id;
        this.transactions = transactions;
        this.parentHash = parentHash;
        this.timeStamp = Date.now();
        this.hash = this.encrypt();
    }

    encrypt() {

        return ""
    }
}