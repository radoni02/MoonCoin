"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = void 0;
var CryptoJS = require("crypto-js");
var Eliptic = require("elliptic");
var Transaction = /** @class */ (function () {
    function Transaction(fromAddress, toAddress, amount) {
        this.fromAddress = fromAddress;
        this.toAddress = toAddress;
        this.amount = amount;
        this.signature = '';
    }
    Transaction.prototype.calculateHash = function () {
        return CryptoJS.SHA256(this.fromAddress + this.toAddress + this.amount).toString();
    };
    Transaction.prototype.signTransaction = function (signingKey) {
        if (signingKey.getPublic('hex') !== this.fromAddress) {
            throw new Error('You cannot sign transation for other wallets!');
        }
        var hashTx = this.calculateHash();
        var sig = signingKey.sign(hashTx, 'base64');
        this.signature = sig.toDER('hex');
    };
    Transaction.prototype.isValid = function () {
        if (this.fromAddress === null)
            return true;
        if (!this.signature || this.signature.length === 0) {
            throw new Error('No signature in this transation');
        }
        var ec = new Eliptic.ec('secp256k1');
        var publicKey = ec.keyFromPublic(this.fromAddress, 'hex');
        return publicKey.verify(this.calculateHash(), this.signature);
    };
    return Transaction;
}());
exports.Transaction = Transaction;
