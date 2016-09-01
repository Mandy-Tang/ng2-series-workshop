import {Component} from '@angular/core';
import {NoteCard} from './note-card';

@Component({
  selector: 'notes',
  template: require('./notes.html'),
  styles: [require('./notes.css')],
  directives: [NoteCard]
})

export class Notes{
  notes = [
    {
      title: 'title',
      value: 'value'
    },
    {
      title: 'title-1',
      value: 'value-2'
    }
  ]

  checkCard(note, i) {
    console.log(note)
    console.log(i)
    this.notes.splice(i, 1);
  }

}