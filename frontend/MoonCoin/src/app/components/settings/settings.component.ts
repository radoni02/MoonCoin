import { Component } from '@angular/core';
import { BlockchainService } from '../../services/blockchain.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {

  public blockchain : any;

  constructor(private blockchainService: BlockchainService ){
    this.blockchain = blockchainService.blockchainInstance;
  }
}
