import { Component } from '@angular/core';

@Component({
  selector: 'app-lectureten',
  imports: [],
  templateUrl: './lectureten.component.html',
  styleUrl: './lectureten.component.css'
})
export class LecturetenComponent {
  display=true

  hide() {
    this.display = !this.display
   }
}
