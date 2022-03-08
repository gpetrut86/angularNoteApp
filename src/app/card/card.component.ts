import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() noteText?: string;
  @Output() onDeleted = new EventEmitter();
  @Input() index?: number;
  constructor() { }

  ngOnInit(): void {
  }

  deleteNoteEvent() {
    this.onDeleted.emit(this.index);
  }
}
