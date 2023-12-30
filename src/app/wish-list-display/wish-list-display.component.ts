import { Component, Input } from '@angular/core';

import { WishItem } from '../../shared/wishItem';

import { WishItemComponent } from '../wish-item/wish-item.component';

@Component({
  selector: 'wish-list-display',
  standalone: true,
  imports: [WishItemComponent],
  templateUrl: './wish-list-display.component.html',
  styleUrl: './wish-list-display.component.scss'
})
export class WishListDisplayComponent {
	@Input() wishes : WishItem[] = [];

	get completed() : WishItem[] {
		return this.wishes.filter((item) => item.completed);
	}

	get notCompleted() : WishItem[] {
		return this.wishes.filter((item) => !item.completed);
	}
}
