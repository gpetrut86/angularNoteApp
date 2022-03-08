import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  @Output() onSave = new EventEmitter();
  message?: string;
  constructor() { }



  ngOnInit(): void {
  }

  onSaveClick(input: HTMLInputElement): void {
    this.message = input.value;
    if (this.message.length == 0)
      return;
    this.onSave.emit(this.message);

    this.message = '';
    input.value = '';

  }
}
