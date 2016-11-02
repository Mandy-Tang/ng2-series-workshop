import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'note-card',
  template: require('./note-card.component.html'),
  styles: [require('./note-card.component.css')]
})

export class NoteCardComponent {
  @Input() note
  @Output() checked = new EventEmitter()

  onChecked() {
    this.checked.emit(this.note)
  }

}
