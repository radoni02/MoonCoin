import * as CryptoJS from 'crypto-js';
import {Transaction} from './Transaction'

 export class Block{

    public timestamp : number;
    public transactions : Transaction[];
    public previousHash : string;
    public hash : string;
    public nonce :number;

    constructor(timestamp,transactions,previousHash = '')
    {
        this.timestamp = timestamp;
        this.transactions = transactions;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
        this.nonce = 0;
    }

    calculateHash()
    {
        return CryptoJS.SHA256(this.previousHash + this.timestamp + JSON.stringify(this.transactions) + this.nonce).toString();
    } 

    mineBlock(difficulty)
    {
        while(this.hash.substring(0,difficulty) !== Array(difficulty+1).join("0"))
        {
            this.nonce++;
            this.hash = this.calculateHash();
        }
        console.log("Block mined:" + this.hash);
    }
}