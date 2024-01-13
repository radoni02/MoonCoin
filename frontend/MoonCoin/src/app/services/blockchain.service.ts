import { Injectable } from '@angular/core';
import EC from 'elliptic';
import {Blockchain} from '../../../../../backend/src/Blockchain';
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
  
}
