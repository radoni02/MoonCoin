"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Block = void 0;
var CryptoJS = require("crypto-js");
var Block = /** @class */ (function () {
    function Block(index, timestamp, data, previousHash) {
        if (previousHash === void 0) { previousHash = ''; }
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
    }
    Block.prototype.calculateHash = function () {
        return CryptoJS.SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
    };
    return Block;
}());
exports.Block = Block;
