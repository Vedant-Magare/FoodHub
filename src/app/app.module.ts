import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PopularItemsComponent } from './components/popular-items/popular-items.component';
import { InspiredSectionComponent } from './components/inspired-section/inspired-section.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { CustomerReviewComponent } from './components/customer-review/customer-review.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuServiceComponent } from './components/menu-service/menu-service.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './components/cart/cart.component';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { SignupComponent } from './components/signup/signup.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PopularItemsComponent,
    InspiredSectionComponent,
    OurServicesComponent,
    CustomerReviewComponent,
    FooterComponent,
    HeaderComponent,
    MenuServiceComponent,
    LoginComponent,
    CartComponent,
    AboutComponent,
    ContactComponent,
    SignupComponent,
    OrderSuccessComponent,
  ],
  imports: [
    BrowserAnimationsModule, // 👈 required for animations
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right', // 👈 toast position
      timeOut: 3000, // 3 sec timeout
      preventDuplicates: true,
    }),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
