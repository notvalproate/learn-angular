import { Component } from '@angular/core';
import { WishItem } from '../../shared/wishItem';

import { WishListDisplayComponent } from '../wish-list-display/wish-list-display.component';
import { AddWishFormComponent } from '../add-wish-form/add-wish-form.component';

@Component({
  selector: 'wish-list',
  standalone: true,
  imports: [WishListDisplayComponent, AddWishFormComponent],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.scss'
})
export class WishListComponent {
	wishItems : WishItem[] = [
		new WishItem('Learn Angular'),
		new WishItem('Be Happy', true),
		new WishItem('Play Roblox')
	];
}