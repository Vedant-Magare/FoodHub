import { Injectable } from '@angular/core';
interface CartItem {
  name: string;
  price: number;
  quantity: number;
  totalAmount: number;
}

@Injectable({ providedIn: 'root' })
export class CartService {
  private cartItems: CartItem[] = [];

  getItems(): CartItem[] {
    return this.cartItems;
  }

  addItem(item: CartItem): void {
    // Check if item already exists to update quantity
    const existing = this.cartItems.find(i => i.name === item.name);
    if (existing) {
      existing.quantity += item.quantity;
      existing.totalAmount = existing.price * existing.quantity;
    } else {
      this.cartItems.push(item);
    }
  }

  getTotalAmount(): number {
    return this.cartItems.reduce((acc, item) => acc + item.totalAmount, 0);
  }
}
