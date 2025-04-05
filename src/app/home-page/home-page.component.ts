import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf, NgStyle } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CourseCardComponent } from '../course-card/course-card.component';
import { Service, Course } from '../service.service';

@Component({
  selector: 'app-home-page',
  imports: [CourseCardComponent, NgFor, RouterLink, NgIf, NgStyle],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  providers: [Service]
})
export class HomePageComponent implements OnInit {

  courses: Course[]=[]
  constructor(private services: Service){}
  ngOnInit(): void {
    this.courses = this.services.getCourses();
  }
}
