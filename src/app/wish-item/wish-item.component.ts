import { Component, Input, Output, EventEmitter } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSquareCheck, faSquareXmark } from '@fortawesome/free-solid-svg-icons';

import { WishItem } from '../../shared/wishItem';

import events from '../../shared/services/EventService';

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

	getIcon() {
		return this.wish.completed ? faSquareXmark : faSquareCheck;
	}

	getCssClasses() {
		let classes : string[] = ['faicon'];

		if(this.wish.completed) {
			classes.push('xmark');
		} else {
			classes.push('checkmark');
		}

		return classes;
	}

	removeWish() {
		events.emit('removeWish', this.wish);
	}

	toggleComplete() {
		this.wish.completed = !this.wish.completed;
	}
}
