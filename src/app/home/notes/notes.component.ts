import { Component } from '@angular/core';
import { NoteService } from '../../shared/services/note.service';

@Component({
  selector: 'notes',
  template: require('./notes.component.html'),
  styles: [require('./notes.component.css')],
})

export class NotesComponent {
  notes = [];
  constructor(private noteService: NoteService) {
    this.noteService.getNotes().subscribe(res => this.notes = res.data);
  }

  checkCard(note) {
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
