import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfilePictureComponent } from './profile-picture/profile-picture.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProfilePictureComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
