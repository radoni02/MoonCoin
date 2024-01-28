import { Component ,OnInit} from '@angular/core';
import { BlockchainService } from '../../services/blockchain.service';
import { FormsModule } from '@angular/forms';
import {Transaction} from '../../../../../../backend/src/Transaction';

@Component({
  selector: 'app-create-transaction',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-transaction.component.html',
  styleUrl: './create-transaction.component.scss'
})
export class CreateTransactionComponent implements OnInit{

 
  public newTransaction! : Transaction;
  public walletKey;
  

  constructor(private blockchainService : BlockchainService){
    this.walletKey = blockchainService.walletKeys[0];
  }

  ngOnInit(): void {
    this.clearTransaction();
  }

  createTransaction(){
    this.newTransaction.fromAddress = this.walletKey.publicKey;
    this.newTransaction.signTransaction(this.walletKey.keyObj);
    //signTransaction not a function so the name is other(check in backend) or I need to strong-type this property

    this.blockchainService.addTransaction(this.newTransaction);
    console.log('asdasd');
    this.clearTransaction();
  }

  private clearTransaction()
  {
    this.newTransaction =  new Transaction("","",0);
  }
}
