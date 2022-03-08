import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'noteApp';
  notes: string[] = ['Find love',];


  reciveNoteEvent($event: string) {
    this.notes.push($event);
  }

  reciveNoteDeleteEvent($index: number) {
    if ($index > -1) {
      this.notes.splice($index, 1);
    }
  }
}
