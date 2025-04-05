import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseCardComponent } from './course-card/course-card.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutCourseComponent } from './about-course/about-course.component';
import { CertificateComponent } from './certificate/certificate.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    HomePageComponent,
  PageNotFoundComponent,
  AboutCourseComponent,
  CertificateComponent,
  CourseCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'lab1';
}
