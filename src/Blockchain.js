"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blockchain = void 0;
var Block_1 = require("./Block");
var Transaction_1 = require("./Transaction");
var Blockchain = /** @class */ (function () {
    function Blockchain() {
        this.difficulty = 2;
        this.miningReward = 100;
        this.chain = [this.createGenesisBlock()];
        this.pendingTransactions = [];
    }
    Blockchain.prototype.createGenesisBlock = function () {
        return new Block_1.Block(Date.now(), "Genesis block", "0");
    };
    Blockchain.prototype.getLatestBlock = function () {
        return this.chain[this.chain.length - 1];
    };
    // addBlock(newBlock : Block)
    // {
    //     newBlock.previousHash = this.getLatestBlock().hash;
    //     newBlock.mineBlock(this.difficulty);
    //     this.chain.push(newBlock);
    // }
    Blockchain.prototype.minePendingTransactions = function (miningRewardAddress) {
        var block = new Block_1.Block(Date.now(), this.pendingTransactions);
        block.previousHash = this.getLatestBlock().hash;
        block.mineBlock(this.difficulty);
        console.log('Block successfully mined!');
        this.chain.push(block);
        this.pendingTransactions = [new Transaction_1.Transaction(null, miningRewardAddress, this.miningReward)];
        //the above line is used to give the reward to the miner who creates and add this block to the blockchain, fromAddress is null because the miner received it from the system and not a specific user
    };
    Blockchain.prototype.createTransaction = function (transation) {
        this.pendingTransactions.push(transation);
    };
    Blockchain.prototype.getBalaceOfAddress = function (address) {
        var balace = 0;
        for (var _i = 0, _a = this.chain; _i < _a.length; _i++) {
            var block = _a[_i];
            for (var _b = 0, _c = block.transactions; _b < _c.length; _b++) {
                var trans = _c[_b];
                if (trans.fromAddress === address) {
                    balace -= trans.amount;
                }
                if (trans.toAddress === address) {
                    balace += trans.amount;
                }
            }
        }
        return balace;
    };
    Blockchain.prototype.isChainValid = function () {
        for (var i = 1; i < this.chain.length; i++) {
            var currentBlock = this.chain[i];
            var previousBlock = this.chain[i - 1];
            if (currentBlock.hash !== currentBlock.calculateHash())
                return false;
            if (currentBlock.previousHash !== previousBlock.hash)
                return false;
        }
        return true;
    };
    return Blockchain;
}());
exports.Blockchain = Blockchain;
