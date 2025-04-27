// // src/app/components/cart/cart.component.ts
// import { HttpClient } from '@angular/common/http';
// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { AuthService } from 'src/app/services/auth.service';
// import { CartService } from 'src/app/services/cart.service';

// @Component({
//   selector: 'app-cart',
//   templateUrl: './cart.component.html',
//   styleUrls: ['./cart.component.css'],
// })
// export class CartComponent implements OnInit {
//   cartItems: any[] = [];
//   subtotal = 0;
//   gst = 0;
//   discount = 0;
//   total = 0;

//   constructor(
//     private cartService: CartService,
//     private authService: AuthService,
//     private router: Router,
//     private http: HttpClient
//   ) {}

//   ngOnInit(): void {
//     if (!this.authService.isLoggedIn()) {
//       this.router.navigate(['/login']); // Redirect if not logged in
//       return;
//     }

//     this.cartItems = this.cartService.getItems();
//     this.updateCartTotals();
//   }

//   deleteItem(index: number): void {
//     this.cartItems.splice(index, 1);
//     this.updateCartTotals();
//   }

//   updateCartTotals(): void {
//     this.subtotal = this.cartItems.reduce(
//       (acc, item) => acc + item.price * item.quantity,
//       0
//     );
//     this.gst = this.subtotal * 0.18;

//     if (this.subtotal >= 1500) this.discount = 100;
//     else if (this.subtotal >= 1000) this.discount = 50;
//     else if (this.subtotal >= 500) this.discount = 20;
//     else this.discount = 0;

//     this.total = this.subtotal + this.gst - this.discount;
//   }

//   // cartItems = []; // You probably already have this from your cart logic

//   confirmOrder() {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition((position) => {
//         const orderData = {
//           items: this.cartItems,
//           latitude: position.coords.latitude,
//           longitude: position.coords.longitude,
//           subtotal: this.subtotal,
//           gst: this.gst,
//           discount: this.discount,
//           total: this.total,
//         };

//         this.http
//           .post('http://localhost:8091/api/order/confirm', orderData, {
//             responseType: 'text' as 'json',
//           })
//           .subscribe(
//             (response: any) => {
//               localStorage.setItem('confirmedOrder', JSON.stringify(response));
//               this.router.navigate(['/order-success']);
//             },
//             (error) => {
//               alert('Error confirming order.');
//               console.error(error);
//             }
//           );
//       });
//     } else {
//       alert('Geolocation not supported');
//     }
//   }
// }
// src/app/components/cart/cart.component.ts
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  subtotal = 0;
  gst = 0;
  discount = 0;
  total = 0;

  constructor(
    private cartService: CartService,
    private authService: AuthService,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
      return;
    }

    this.cartItems = this.cartService.getItems();
    this.updateCartTotals();
  }

  deleteItem(index: number): void {
    this.cartItems.splice(index, 1);
    this.updateCartTotals();
  }

  updateCartTotals(): void {
    this.subtotal = this.cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    this.gst = this.subtotal * 0.18;

    if (this.subtotal >= 1500) this.discount = 100;
    else if (this.subtotal >= 1000) this.discount = 50;
    else if (this.subtotal >= 500) this.discount = 20;
    else this.discount = 0;

    this.total = this.subtotal + this.gst - this.discount;
  }

  confirmOrder() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const user = this.authService.getCurrentUser(); // Assuming you store logged-in user data
        const orderData = {
          name: user?.name,
          email: user?.email,
          items: this.cartItems,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          subtotal: this.subtotal,
          gst: this.gst,
          discount: this.discount,
          total: this.total,
        };

        this.http
          .post('http://localhost:8091/api/order/confirm', orderData, {
            responseType: 'text' as 'json',
          })
          .subscribe(
            (response: any) => {
              localStorage.setItem('confirmedOrder', JSON.stringify(orderData));
              // this.router.navigate(['/order-success']);
              localStorage.setItem(
                'latitude',
                position.coords.latitude.toString()
              );
              localStorage.setItem(
                'longitude',
                position.coords.longitude.toString()
              );
              this.router.navigate(['/order-success']);
            },
            (error) => {
              alert('Error confirming order.');
              console.error(error);
            }
          );
      });
    } else {
      alert('Geolocation not supported');
    }
  }
}
