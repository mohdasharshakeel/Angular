import { Component } from '@angular/core';

@Component({
  selector: 'app-lectureevent',
  imports: [],
  templateUrl: './lectureevent.component.html',
  styleUrl: './lectureevent.component.css'
})
export class LectureeventComponent {
  handleEvent(event:MouseEvent) {
    console.log("function called", event.type)
    // console.log("function called", (event.target as Element).classList)
  }

} 
