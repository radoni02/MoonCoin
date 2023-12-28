"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Block_1 = require("./Block");
var Blockchain_1 = require("./Blockchain");
var moonCoin = new Blockchain_1.Blockchain();
console.log("Mineing block 1...");
moonCoin.addBlock(new Block_1.Block(1, "10/07/2023", { amount: 4 }));
console.log("Mineing block 2...");
moonCoin.addBlock(new Block_1.Block(2, "11/07/2023", { amount: 6 }));
// console.log(JSON.stringify(moonCoin,null,4));
// console.log(moonCoin.isChainValid());
// moonCoin.chain[1].data = 4;
// console.log(moonCoin.isChainValid());
