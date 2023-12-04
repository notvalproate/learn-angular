import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { WishListDisplayComponent } from './wish-list-display/wish-list-display.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';

import { WishItem } from '../shared/wishItem';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [CommonModule, RouterOutlet, WishListDisplayComponent, AddWishFormComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent {
	wishItems : WishItem[] = [
		new WishItem('Learn Angular'),
		new WishItem('Be Happy', true),
		new WishItem('Play Roblox')
	];
}
