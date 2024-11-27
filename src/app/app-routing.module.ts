import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublishAnnouncementComponent } from './marcketplace/pages/publish-announcement/publish-announcement.component';
import { DetailsComponent } from './marcketplace/pages/details/details.component';
import { HomeComponent } from './marcketplace/pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'publish', component: PublishAnnouncementComponent },
  { path: 'details', component: DetailsComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 