import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { WishListDisplayComponent } from './wish-list-display/wish-list-display.component';

import { WishItem } from '../shared/wishItem';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [CommonModule, RouterOutlet, FormsModule, WishListDisplayComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent {
	wishItems : WishItem[] = [
		new WishItem('Learn Angular'),
		new WishItem('Be Happy', true),
		new WishItem('Play Roblox')
	];

	inputWish : string = '';

	addWish() {
		this.wishItems.push(new WishItem(this.inputWish));
		this.inputWish = '';
	}

	functionTemp() {
		console.log('clicked!');
	}
}
