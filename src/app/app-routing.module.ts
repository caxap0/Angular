import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutCourseComponent } from './about-course/about-course.component';
import { CertificateComponent } from './certificate/certificate.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ApiComponent } from './api/api.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {path: '',component: HomePageComponent},
  {path: 'about', component: AboutCourseComponent},
  {path: 'certificate', component: CertificateComponent},
  {path: 'api', component: ApiComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  FormsModule, NgModule, ReactiveFormsModule],
  exports: [RouterModule]
})

export class AppRoutingModule { }
