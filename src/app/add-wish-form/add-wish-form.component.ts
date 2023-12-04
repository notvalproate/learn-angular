import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { WishItem } from '../../shared/wishItem';

@Component({
  selector: 'add-wish-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-wish-form.component.html',
  styleUrl: './add-wish-form.component.scss'
})
export class AddWishFormComponent {
	@Output() addWish : EventEmitter<WishItem> = new EventEmitter<WishItem>();

	inputWish : string = '';

	addNewWish() {
		this.addWish.emit(new WishItem(this.inputWish))
		this.inputWish = '';
	}
}
