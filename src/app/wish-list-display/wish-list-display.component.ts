import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSquareCheck, faSquareXmark } from '@fortawesome/free-solid-svg-icons';

import { WishItem } from '../../shared/wishItem';

@Component({
  selector: 'wish-list-display',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './wish-list-display.component.html',
  styleUrl: './wish-list-display.component.scss'
})
export class WishListDisplayComponent {
	@Input() wishes : WishItem[] = [];

	faSquareCheck = faSquareCheck;
	faSquareXmark = faSquareXmark;

	get completed() : WishItem[] {
		return this.wishes.filter((item) => item.completed);
	}

	get notCompleted() : WishItem[] {
		return this.wishes.filter((item) => !item.completed);
	}

	toggleComplete(item : WishItem) {
		item.completed = !item.completed;
	}
}
