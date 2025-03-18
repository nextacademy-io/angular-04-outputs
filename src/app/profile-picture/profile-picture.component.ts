import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-profile-picture',
  imports: [],
  templateUrl: './profile-picture.component.html',
})
export class ProfilePictureComponent {
  diameter = input(100); // In pixels
  profileUrl = input.required<string>();

  pictureStyle = computed(() => ({
    width: `${this.diameter()}px`,
    height: `${this.diameter()}px`,
  }));
}
