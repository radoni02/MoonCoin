import { Component } from '@angular/core';
import { BlockchainService } from '../../services/blockchain.service';
import { BlockViewComponent } from '../block-view/block-view.component';
import { CommonModule } from '@angular/common';
import { blockDto } from '../../models/BlockDto';
import { TransactionsTableComponent } from '../transactions-table/transactions-table.component';
import {Block} from '../../../../../../backend/src/Block';

@Component({
  selector: 'app-blockchain-viewer',
  standalone: true,
  imports: [BlockViewComponent,CommonModule,TransactionsTableComponent],
  templateUrl: './blockchain-viewer.component.html',
  styleUrl: './blockchain-viewer.component.scss'
})
export class BlockchainViewerComponent {

  public blocks : any[]= [];
  public selectedBlock : any;

  constructor(private blockchainService : BlockchainService){
    this.blocks = blockchainService.getBlocks();
    this.selectedBlock = this.blocks[0];
  }

  showTransactions(block: any){
    this.selectedBlock = block;
  }
}
