import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { ShoppingListService } from '../../services/shopping-list/shopping-list.service';
import { Observable } from 'rxjs/Observable';
import { Item } from '../../models/item/item.model';

@IonicPage()
@Component({
  selector: 'page-briefs-list',
  templateUrl: 'briefs-list.html',
})
export class BriefsListPage {

  shoppingList$: Observable<Item[]>;

  constructor(
  	public navCtrl: NavController, 
  	private shopping: ShoppingListService,
  	) {
  	this.shoppingList$ = this.shopping
  		.getShoppinglist() // DB List
  		.snapshotChanges() // Key and Value
  		.map(
  		changes => {
  			return changes.map(c => ({
  				key: c.payload.key,
  				...c.payload.val(),
  			}));
  		});
  
}
  
  	key: 'value-here'
  	name: 'nome'
    description: 'descrizione'
  
}
