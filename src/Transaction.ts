import * as CryptoJS from 'crypto-js';
import * as Eliptic from 'elliptic';

export class Transaction{

    public fromAddress: string;
    public toAddress: string;
    public amount: number;
    private signature :string;

    constructor(fromAddress:any,toAddress:any,amount:number)
    {
        this.fromAddress = fromAddress;
        this.toAddress = toAddress;
        this.amount = amount;
        this.signature = ''
    }

    calculateHash()
    {
        return CryptoJS.SHA256(this.fromAddress + this.toAddress + this.amount).toString();
    }

    signTransaction(signingKey: Eliptic.ec.KeyPair)
    {
        if(signingKey.getPublic('hex') !== this.fromAddress)
        {
            throw new Error('You cannot sign transation for other wallets!');
        }

        const hashTx = this.calculateHash();
        const sig = signingKey.sign(hashTx,'base64');
        this.signature = sig.toDER('hex');
    }

    isValid()
    {
        if(this.fromAddress === null) return true;

        if(!this.signature || this.signature.length === 0)
        {
            throw new Error('No signature in this transation');
        }
        const ec = new Eliptic.ec('secp256k1');
        const publicKey = ec.keyFromPublic(this.fromAddress,'hex');
        return publicKey.verify(this.calculateHash(),this.signature);
    }
}