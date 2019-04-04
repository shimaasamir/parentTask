import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';


const routes: Routes = [
  // { path: 'crisis-center', component: CrisisListComponent },
  // { path: 'hero/:id', component: HeroDetailComponent },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' }
  },
  {
    path: 'users',
    component: UsersComponent,
    data: { title: 'Users List' }
  },
  {
    path: 'user/:id',
    component: UserComponent,
    data: { title: 'Users List' }
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: 'create', component: CreateUserComponent },
  { path: 'update', component: UpdateUserComponent },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
