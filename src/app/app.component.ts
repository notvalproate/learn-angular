import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSquareCheck, faSquareXmark } from '@fortawesome/free-solid-svg-icons';

import { WishItem } from '../shared/wishItem';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [CommonModule, RouterOutlet, FontAwesomeModule],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent {
	constructor() {
		for(let i = 0; i < this.wishItems.length; i++) {
			if(this.wishItems[i].completed) {
				this.completed.push(this.wishItems[i]);
			} else {
				this.notCompleted.push(this.wishItems[i]);
			}
		}
	}

	wishItems : WishItem[] = [
		new WishItem('Learn Angular'),
		new WishItem('Be Happy', true),
		new WishItem('Play Roblox')
	];

	completed : WishItem[] = []
	notCompleted : WishItem[] = []

	faSquareCheck = faSquareCheck;
	faSquareXmark = faSquareXmark;
}
