import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { ItemDetailsComponent } from './pages/list-page/item-details/item-details.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListPageComponent
  },
  {
    path: '**',
    redirectTo: '/list'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
