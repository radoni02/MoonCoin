import {Block} from './Block'
import {Blockchain} from './Blockchain'

let moonCoin = new Blockchain();

moonCoin.addBlock(new Block(1,"10/07/2023",{amount: 4}));
moonCoin.addBlock(new Block(2,"11/07/2023",{amount: 6}));

console.log(JSON.stringify(moonCoin,null,4));

console.log(moonCoin.isChainValid());
moonCoin.chain[1].data = 4;
console.log(moonCoin.isChainValid());