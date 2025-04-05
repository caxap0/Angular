import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent} from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutCourseComponent } from './about-course/about-course.component';
import { CertificateComponent } from './certificate/certificate.component';
import {ChatComponent} from './chat/chat.component';

export const routes: Routes = [
  {path: '',component: HomePageComponent},
  {path: 'about-course', component: AboutCourseComponent},
  {path: 'certificate', component: CertificateComponent},
  {path: '**', component: PageNotFoundComponent}
];
