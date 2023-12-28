import {Block} from './Block'
import {Blockchain} from './Blockchain'
import { Transaction } from './Transaction';

let moonCoin = new Blockchain();
moonCoin.createTransaction(new Transaction("address1","address2",5));
moonCoin.createTransaction(new Transaction("address2","address1",3));

moonCoin.minePendingTransactions("address3");

moonCoin.createTransaction(new Transaction("address1","address2",50));
moonCoin.createTransaction(new Transaction("address2","address1",30));


moonCoin.minePendingTransactions("address3");
console.log('\nBlance of address3 is ',moonCoin.getBalaceOfAddress('address3'));


// console.log("Mineing block 1...");
// moonCoin.addBlock(new Block(1,"10/07/2023",{amount: 4}));

// console.log("Mineing block 2...");
// moonCoin.addBlock(new Block(2,"11/07/2023",{amount: 6}));

console.log(JSON.stringify(moonCoin.chain,null,4));

// console.log(moonCoin.isChainValid());
// moonCoin.chain[1].data = 4;
// console.log(moonCoin.isChainValid());