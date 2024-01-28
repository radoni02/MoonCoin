import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-transactions-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transactions-table.component.html',
  styleUrl: './transactions-table.component.scss'
})
export class TransactionsTableComponent {

  @Input() public transactions : any[] = [];

}
