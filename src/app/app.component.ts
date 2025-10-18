import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SingupComponent } from "./singup/singup.component";
import { ProfileComponent } from "./profile/profile.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Angular Course';
  handleClick() {
    alert('Button clicked!');
    this.otherFunction();
  }

  otherFunction() {
    console.log('This is another function.');
  }

  sum(num1: number, num2: number) {
    console.log(num1 + num2);
  }
}
