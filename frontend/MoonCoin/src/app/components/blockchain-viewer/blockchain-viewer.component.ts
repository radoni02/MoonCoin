import { Component } from '@angular/core';
import { BlockchainService } from '../../services/blockchain.service';
import { BlockViewComponent } from '../block-view/block-view.component';
import { CommonModule } from '@angular/common';
import { blockDto } from '../../models/BlockDto';

@Component({
  selector: 'app-blockchain-viewer',
  standalone: true,
  imports: [BlockViewComponent,CommonModule],
  templateUrl: './blockchain-viewer.component.html',
  styleUrl: './blockchain-viewer.component.scss'
})
export class BlockchainViewerComponent {

  public blocks : blockDto[] = [];

  constructor(private blockchainService : BlockchainService){
    this.blocks = blockchainService.getBlocks();
  }
}
