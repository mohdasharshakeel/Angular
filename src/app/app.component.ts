import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SingupComponent } from "./singup/singup.component";
import { ProfileComponent } from "./profile/profile.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent, SingupComponent, ProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular Course';
}
