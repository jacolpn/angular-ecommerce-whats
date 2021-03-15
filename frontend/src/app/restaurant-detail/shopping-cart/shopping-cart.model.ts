import { MenuItem } from './../menu/menu-item.model';
export class CartItem {
  constructor(
    public menuItem: MenuItem,
    public quantity = 1
  ) { }

  value(): number {
    return this.menuItem.price * this.quantity;
  }
}
