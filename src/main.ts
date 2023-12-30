import {Block} from './Block'
import {Blockchain} from './Blockchain'
import { Transaction } from './Transaction';
import * as Eliptic from 'elliptic';
const ec = new Eliptic.ec('secp256k1');

const myKey = ec.keyFromPrivate('12d64651ef419f6cb8e31bd831fe079e3a90d4049c4342bac94f74ea9c8624da');
const myWalletAddress = myKey.getPublic('hex');

const tx1 = new Transaction(myWalletAddress,"real public key of another user",5);
tx1.signTransaction(myKey);

const tx2 = new Transaction(myWalletAddress,"real public key of another user",50);
tx2.signTransaction(myKey);


let moonCoin = new Blockchain();

moonCoin.addTransaction(tx1);

// moonCoin.addTransaction(new Transaction("address1","address2",5));
// moonCoin.addTransaction(new Transaction("address2","address1",3));

moonCoin.minePendingTransactions("address3");

// moonCoin.addTransaction(new Transaction("address1","address2",50));
// moonCoin.addTransaction(new Transaction("address2","address1",30));


moonCoin.minePendingTransactions("address3");
// console.log('\nBlance of address3 is ',moonCoin.getBalaceOfAddress('address3'));

moonCoin.minePendingTransactions("address3");
moonCoin.minePendingTransactions("address3");
moonCoin.minePendingTransactions("address3");
// console.log("Mineing block 1...");
// moonCoin.addBlock(new Block(1,"10/07/2023",{amount: 4}));

// console.log("Mineing block 2...");
// moonCoin.addBlock(new Block(2,"11/07/2023",{amount: 6}));

console.log(JSON.stringify(moonCoin.chain,null,4));

// console.log(moonCoin.isChainValid());
// moonCoin.chain[1].data = 4;
// console.log(moonCoin.isChainValid());
console.log('Is chain valid?',moonCoin.isChainValid())