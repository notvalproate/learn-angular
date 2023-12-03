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
export class WishListDisplayComponent implements OnChanges {
	@Input() wishes : WishItem[] = [];

	completed : WishItem[] = [];
	notCompleted : WishItem[] = [];

	faSquareCheck = faSquareCheck;
	faSquareXmark = faSquareXmark;

	ngOnChanges(changes: SimpleChanges) {
		if (changes['wishes'] && changes['wishes'].currentValue) {
			this.completed = this.wishes.filter((item) => item.completed);
    		this.notCompleted = this.wishes.filter((item) => !item.completed);
		}
	}

	addToCompleted(index : number) {
		this.completed.push(...this.notCompleted.splice(index, 1));
	}

	addToNotCompleted(index : number) {
		this.notCompleted.push(...this.completed.splice(index, 1));
	}
}
