import { Component } from '@angular/core';
import { BlockchainService } from '../../services/blockchain.service';
import { Transaction } from '../../../../../../backend/src/Transaction';
import { TransactionsTableComponent } from '../transactions-table/transactions-table.component';

@Component({
  selector: 'app-pending-transactions',
  standalone: true,
  imports: [TransactionsTableComponent],
  templateUrl: './pending-transactions.component.html',
  styleUrl: './pending-transactions.component.scss'
})
export class PendingTransactionsComponent {
  public pendingTransactions : Transaction[];

  constructor(private blockchainService: BlockchainService){
    this.pendingTransactions = blockchainService.getPendingTransaction();
  }

  minePendingTransactions()
  {
    this.blockchainService.minePendingTransaction();
  }

}
