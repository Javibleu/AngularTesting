import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button';
import { CourseComponent } from './courses/course/course.component';
import { AboutComponent } from './about/about/about.component';
import { CourseDialogComponent } from './courses/course-dialog/course-dialog.component';
import { CoursesCardListComponent } from './courses/courses-card-list/courses-card-list.component';
import { HomeComponent } from './courses/home/home.component'


@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    AboutComponent,
    CourseDialogComponent,
    CoursesCardListComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
