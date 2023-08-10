import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './user-component/add-update-user/add-user..component';
import { UsersListComponent } from './user-component/users-list/users-list.component';
import { UserDetailComponent } from './user-component/user-detail/user-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'add-user',
    pathMatch: 'full',
  },
  {
    path: 'add-user',
    component: AddUserComponent,
  },
  {
    path: 'list-user',
    component: UsersListComponent,
  },
  {
    path: 'detail-user/:name',
    component: UserDetailComponent,
  },
  // {
  //   path: 'detail-user/:id',
  //   component: UserDetailComponent,
  // },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
