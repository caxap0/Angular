import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent} from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutCourseComponent } from './about-course/about-course.component';
import { CertificateComponent } from './certificate/certificate.component';
import { ChatComponent } from './chat/chat.component';
import { FormsComponent } from './forms/forms.component';
import { ApiComponent } from './api/api.component';

export const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'about-course', component: AboutCourseComponent},
  {path: 'certificate', component: CertificateComponent},
  {path: 'api', component: ApiComponent},
  {path: '**', component: PageNotFoundComponent}
];
