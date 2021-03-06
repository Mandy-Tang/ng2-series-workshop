import { Component, Output, EventEmitter } from '@angular/core';
import { isEmpty } from 'lodash';

@Component({
  selector: 'note-creator',
  template: require('./note-creator.component.html'),
  styles: [require('./note-creator.component.css')],
})

export class NoteCreatorComponent {
  isFocus:boolean = false;
  newNote = {title: '', value: '', color: 'white'};

  @Output()
  onCreateNote = new EventEmitter();

  createNote() {
    const {title, value, color} = this.newNote;
    if (isEmpty(title) || isEmpty(value)) {
      return false;
    }
    this.onCreateNote.emit({title, value, color});
    this.newNote = {title: '', value: '', color: 'white'};
    return false;
  }

  setColor(color) {
    this.newNote.color = color;
  }
}
