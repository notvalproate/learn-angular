import { Component, Input, Output, EventEmitter } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSquareCheck, faSquareXmark } from '@fortawesome/free-solid-svg-icons';

import { WishItem } from '../../shared/wishItem';

@Component({
  selector: 'wish-item',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './wish-item.component.html',
  styleUrl: './wish-item.component.scss'
})
export class WishItemComponent {
	@Input() wish! : WishItem;

	faSquareCheck = faSquareCheck;
	faSquareXmark = faSquareXmark;

	toggleComplete() {
		this.wish.completed = !this.wish.completed;
	}
}
