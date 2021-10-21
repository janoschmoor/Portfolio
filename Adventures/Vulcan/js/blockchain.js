
export default class BlockChain {
    constructor() {
        this.chain = [];
    }

    add(block) {
        this.chain.push(block);
    }
}