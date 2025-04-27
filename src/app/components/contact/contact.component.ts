import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    message: '',
  };

  showSuccessMessage = false;
  isSubmitting = false; // To show loading/sending if you want later

  constructor(
    private userService: UsersService,
    private toastr: ToastrService
  ) {}

  submitForm() {
    if (this.contact.name && this.contact.email && this.contact.message) {
      this.isSubmitting = true; // ✅ Start spinner

      this.userService.sendContactForm(this.contact).subscribe(
        (res) => {
          console.log('Server response:', res);

          this.toastr.success('Your message has been sent!', 'Success');
          this.showSuccessMessage = true;

          this.contact = { name: '', email: '', message: '' };
          this.isSubmitting = false; // ✅ Stop spinner

          setTimeout(() => {
            this.showSuccessMessage = false;
          }, 3000);
        },
        (err) => {
          console.error('Error sending message:', err);

          this.toastr.error(
            'Failed to send message. Try again later.',
            'Error'
          );
          this.isSubmitting = false; // ✅ Stop spinner
        }
      );
    } else {
      this.toastr.warning('Please fill all fields properly.', 'Warning');
    }
  }
}
