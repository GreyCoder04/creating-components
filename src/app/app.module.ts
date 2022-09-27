import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, PostComponent, ParagraphComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
