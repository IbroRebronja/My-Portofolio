import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
import emailjs from 'emailjs-com'; // Import emailjs-com

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],  // Import FormsModule here
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  formData = {
    from_name: '',
    from_email: '',
    message: ''
  };

  sendMessage() {
    const { from_name, from_email, message } = this.formData;

    // Replace with the correct recipient's name (you) and email (your email address)
    const to_name = "Ibro Rebronja"; // Recipient's name
    const to_email = "your-email@example.com"; // Your email address

    // Send data to EmailJS
    emailjs.send('service_94ney0e', 'template_cj9zuof', {
      to_name,        // recipient's name
      from_name,      // sender's name
      from_email,     // sender's email
      message         // the message from the form
    }, 'os4FabRyggIte8slG')  // Your public key
    .then((response) => {
      console.log('Message sent successfully', response);
      // Optionally, show a success message to the user
    })
    .catch((error) => {
      console.error('Error sending message:', error);
      // Optionally, show an error message to the user
    });
  }
}
