import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: '',
    data: {
      title: $localize`Home`,
    },
    children: [
      {
        path: '',
        loadComponent: () => import('./home.component').then(m => m.HomeComponent),
        data: {
          title: $localize`Liste des tags`
        },
      },
      {
        path: ':id',
        loadComponent: () =>  import('./product-deatils/product-deatils.component').then( (m) => m.ProductDeatilsComponent   ),
        data: {
          title: $localize`Product Details`,
        },
      },
    ],
  },
];
