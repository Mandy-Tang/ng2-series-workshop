import {Component} from '@angular/core';
import {NoteCard} from './note-card';
import {NoteCreator} from './note-creator';
import {NoteService} from '../../shared/services/notes';

@Component({
  selector: 'notes',
  template: require('./notes.html'),
  styles: [require('./notes.css')],
  directives: [NoteCard, NoteCreator]
})

export class Notes{
  notes = [];
  // notes = [
  //   {
  //     title: 'title',
  //     value: 'value',
  //     color: 'rgb(255, 209, 128)'
  //   },
  //   {
  //     title: 'title-1',
  //     value: 'value-2',
  //     color: 'rgb(204, 255, 144)'
  //   }
  // ]
  constructor(private noteService: NoteService) {
    this.noteService.getNotes().subscribe(res => this.notes = res.data);
  }

  checkCard(note, i) {
    console.log(note)
    console.log(i)
    this.notes.splice(i, 1);
  }

  addNote(note) {
    this.noteService.createNote(note).subscribe(note => this.notes.push(note));
    // this.notes.push(note);
  }

}
