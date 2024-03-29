import { Injectable } from '@angular/core';
import EC from 'elliptic';
import {Blockchain} from '../../../../../backend/src/Blockchain';
import {Block} from '../../../../../backend/src/Block';
import { walletKey } from '../models/WalletKey';



@Injectable({
  providedIn: 'root'
})
export class BlockchainService {

  public blockchainInstance = new Blockchain();
  public walletKeys : walletKey[] = [];

  constructor() { 
    this.blockchainInstance.difficulty = 1;
    this.blockchainInstance.amountOfTransactionsInOneBlock = 5;
    this.blockchainInstance.minePendingTransactions('my-wallet-address');
    this.blockchainInstance.minePendingTransactions('my-wallet-address');
    this.generateWalletKeys();
  }

  getBlocks()
  {
    return this.blockchainInstance.chain;
  }

  private generateWalletKeys(){
    const ec = new EC.ec('secp256k1');
    const key = ec.genKeyPair();

    this.walletKeys.push(
      {
        keyObj: key,
        publicKey: key.getPublic('hex'),
        privateKey: key.getPrivate('hex'),
      }
    );
  }

  addTransaction(transaction: any){
    this.blockchainInstance.addTransaction(transaction);
  }

  getPendingTransaction()
  {
    return this.blockchainInstance.pendingTransactions;
  }

  minePendingTransaction(){
    this.blockchainInstance.minePendingTransactions(this.walletKeys[0].publicKey);
    //here need to change when will refactor code to be able to login to other accounts.
    //change from walletKeys[0] to implementation where each user will have their own keys.
  }
  
}
