// import { Component, OnInit, AfterViewInit } from '@angular/core';
// import * as L from 'leaflet';

// @Component({
//   selector: 'app-order-success',
//   templateUrl: './order-success.component.html',
//   styleUrls: ['./order-success.component.css'],
// })
// export class OrderSuccessComponent implements OnInit {
//   latitude: number = 0;
//   longitude: number = 0;

//   ngOnInit(): void {
//     // You can fetch this from a service or localStorage/sessionStorage
//     this.latitude = parseFloat(localStorage.getItem('latitude') || '0');
//     this.longitude = parseFloat(localStorage.getItem('longitude') || '0');

//     this.initMap();
//   }

//   private initMap(): void {
//     const map = L.map('map').setView([this.latitude, this.longitude], 15);

//     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//       attribution: '&copy; OpenStreetMap contributors'
//     }).addTo(map);

//     const marker = L.marker([this.latitude, this.longitude])
//       .addTo(map)
//       .bindPopup('Your Delivery Location')
//       .openPopup();
//   }

//   // latitude = 0;
//   // longitude = 0;
//   name = '';
//   email = '';
//   subtotal = 0;
//   gst = 0;
//   discount = 0;
//   total = 0;

// }
import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.css'],
})
export class OrderSuccessComponent implements OnInit {
  latitude: number = 0;
  longitude: number = 0;

  name = '';
  email = '';
  subtotal = 0;
  gst = 0;
  discount = 0;
  total = 0;

  ngOnInit(): void {
    // Location from localStorage
    this.latitude = parseFloat(localStorage.getItem('latitude') || '0');
    this.longitude = parseFloat(localStorage.getItem('longitude') || '0');

    // Order details from localStorage
    const order = localStorage.getItem('confirmedOrder');
    if (order) {
      const orderData = JSON.parse(order);
      this.name = orderData.name || '';
      this.email = orderData.email || '';
      this.subtotal = orderData.subtotal || 0;
      this.gst = orderData.gst || 0;
      this.discount = orderData.discount || 0;
      this.total = orderData.total || 0;
    }

    this.initMap(); // Do not modify map code
  }

  private initMap(): void {
    const map = L.map('map').setView([this.latitude, this.longitude], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    const marker = L.marker([this.latitude, this.longitude])
      .addTo(map)
      .bindPopup('Your Delivery Location')
      .openPopup();
  }
}
