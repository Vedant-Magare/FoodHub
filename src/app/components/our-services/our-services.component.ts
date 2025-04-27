import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.css'],
})
export class OurServicesComponent {
  @ViewChild('carousel', { static: false }) carousel!: ElementRef;

  services = [
    {
      name: 'MC White Coffee',
      img: 'assets/images/white-coffe.jpg',
      bgColor: '#fce4ec',
    },
    {
      name: 'Double Burger',
      img: 'assets/images/double-burger.avif',
      bgColor: '#e0f7fa',
    },
    {
      name: 'Hawaiian Pizza',
      img: 'assets/images/hawaiian-pizza.jpg',
      bgColor: '#fff3e0',
    },
    {
      name: 'Ice Cream Cone',
      img: 'assets/images/ice-cream.avif',
      bgColor: '#ede7f6',
    },
    {
      name: 'Fruit Juice',
      img: 'assets/images/juice.avif',
      bgColor: '#e8f5e9',
    },
    {
      name: 'Biryani',
      img: 'assets/images/biryani.avif',
      bgColor: '#DAD0CD',
    },
    {
      name: 'Khichadi',
      img: 'assets/images/Khichadi.avif',
      bgColor: '#fce4ec',
    },
    {
      name: 'Mix veg',
      img: 'assets/images/mix-veg.avif',
      bgColor: '#e0f7fa',
    },
    {
      name: 'Veg Thali',
      img: 'assets/images/Veg-Thali.avif',
      bgColor: '#fff3e0',
    },
    {
      name: 'Samosa',
      img: 'assets/images/samosa.avif',
      bgColor: '#ede7f6',
    },
    {
      name: 'Chips Fries Crispy',
      img: 'assets/images/chips-fry.avif',
      bgColor: '#e8f5e9',
    },
    {
      name: 'Mojito Drink',
      img: 'assets/images/Mojito-drink.avif',
      bgColor: '#fce4ec',
    },
  ];

  scrollLeft() {
    this.carousel.nativeElement.scrollBy({ left: -200, behavior: 'smooth' });
  }

  scrollRight() {
    this.carousel.nativeElement.scrollBy({ left: 200, behavior: 'smooth' });
  }
}
