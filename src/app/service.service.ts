import { Injectable } from '@angular/core';


export interface Course {
  title: string;
  description: string;
};

@Injectable({
  providedIn: 'root'
})


export class Service {
  Courses: Course[]= [
    {
      title: 'Типы данных в Python',
      description: 'Все о типах данных в Python'
    },
    {
      title: 'Python OOP',
      description: 'Научись основам ООП в Python'
    },
    {
      title: 'Списки и массивы в Python',
      description: 'Подробнее о различии списков и массивов в Python'
    },
   ];
  
  getCourses(): Course[] {
    return this.Courses;
  }
}