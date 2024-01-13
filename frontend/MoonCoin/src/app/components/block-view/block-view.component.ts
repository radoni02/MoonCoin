import { Component, Input } from '@angular/core';
import { blockDto } from '../../models/BlockDto';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-block-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './block-view.component.html',
  styleUrl: './block-view.component.scss'
})
export class BlockViewComponent {

  @Input() public block : blockDto = {} as blockDto;

  constructor(){}
}
