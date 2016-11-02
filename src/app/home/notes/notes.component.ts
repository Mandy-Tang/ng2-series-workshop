import { Component } from '@angular/core';
// import {NoteCard} from './note-card';
// import {NoteCreator} from './note-creator';
import { NoteService } from '../../shared/services/note.service';

@Component({
  selector: 'notes',
  template: require('./notes.component.html'),
  styles: [require('./notes.component.css')],
  // directives: [NoteCard, NoteCreator]
})

export class NotesComponent {
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

  checkCard(note) {
    // console.log(note)
    // console.log(i)
    // this.notes.splice(i, 1);
    this.noteService.completeNote(note).subscribe(note => {
      let index = this.notes.findIndex(element => element.id === note.id);
      this.notes.slice(index, 1);
    })
  }

  addNote(note) {
    this.noteService.createNote(note).subscribe(note => {
      this.notes.push(note);
      console.log(this.notes)
    });
    // this.notes.push(note);
  }

}
