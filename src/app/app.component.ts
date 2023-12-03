import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSquareCheck, faSquareXmark } from '@fortawesome/free-solid-svg-icons';

import { WishItem } from '../shared/wishItem';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [CommonModule, RouterOutlet, FontAwesomeModule, FormsModule],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent {
	wishItems : WishItem[] = [
		new WishItem('Learn Angular'),
		new WishItem('Be Happy', true),
		new WishItem('Play Roblox')
	];

	completed : WishItem[] = this.wishItems.filter((item) => item.completed);
	notCompleted : WishItem[] = this.wishItems.filter((item) => !item.completed);

	faSquareCheck = faSquareCheck;
	faSquareXmark = faSquareXmark;

	inputWish : string = '';

	addToCompleted(index : number) {
		this.completed.push(...this.notCompleted.splice(index, 1));
	}

	addToNotCompleted(index : number) {
		this.notCompleted.push(...this.completed.splice(index, 1));
	}

	addWish() {
		this.notCompleted.push(new WishItem(this.inputWish));
		this.inputWish = '';
	}
}
