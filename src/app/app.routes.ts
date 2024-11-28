import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layout/default-layout/default-layout.component';
import { AvenderComponent } from './marcketplace/pages/avender/avender.component';
import { PublishAnnouncementComponent } from './marcketplace/pages/publish-announcement/publish-announcement.component';
import { DetailsComponent } from './marcketplace/pages/details/details.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'Home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home',
    },
    children: [
      {
        path: 'Home',
        loadChildren: () =>
          import('./marcketplace/pages/home/routes').then((m) => m.routes),
      },
      {
        path: 'Avendr',
        component: AvenderComponent,
        data: {
          title: 'Avendr',
        },
      },
      {
        path: 'publish',
        component: PublishAnnouncementComponent,
        data: {
          title: 'Publier une annonce',
        },
      },
      {
        path: 'details',
        component: DetailsComponent,
      }
    ],
  },
];
