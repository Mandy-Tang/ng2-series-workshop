import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { routes } from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotesComponent } from "./home/notes/notes.component";
import { NoteCardComponent } from './home/notes/note-card/note-card.component';
import { NoteCreatorComponent } from './home/notes/note-creator/note-creater.component';
import { ColorPickerComponent } from './home/notes/note-creator/color-picker/color-picker.component';

import { AboutComponent } from './about/about.component';
import { MainComponent } from './main/main.component';
import { AuthComponent } from './auth/auth.component';
import { AppBarComponent } from './shared/components/app-bar/app-bar.component'

import * as services from './shared/services';

const mapValuesToArray = obj => Object.keys(obj).map(key => obj[key]);
const providers = [mapValuesToArray(services)];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AuthComponent,
    MainComponent,
    NotesComponent,
    AppBarComponent,
    NoteCardComponent,
    NoteCreatorComponent,
    ColorPickerComponent
  ],
  providers: [
    providers
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {}
