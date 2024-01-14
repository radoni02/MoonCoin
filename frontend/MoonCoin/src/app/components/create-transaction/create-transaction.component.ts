import { Component ,OnInit} from '@angular/core';
import { BlockchainService } from '../../services/blockchain.service';
import { transactionDto } from '../../models/TransactionDto';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-transaction',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-transaction.component.html',
  styleUrl: './create-transaction.component.scss'
})
export class CreateTransactionComponent implements OnInit{

 
  public newTransaction : any;
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
    this.clearTransaction();
  }

  private clearTransaction()
  {
    this.newTransaction = {
      fromAddress: '',
      toAddress: '',
      amount: 0,
      signature: ''
    }
  }
}
