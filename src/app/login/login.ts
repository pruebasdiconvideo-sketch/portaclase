import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  email = '';
  password = '';

  inicarSesion() {

    console.log(this.email);
    console.log(this.password);
  }
}
