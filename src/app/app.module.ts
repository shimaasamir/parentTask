import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { HttpClientModule } from '@angular/common/http';

import { UiModule } from './ui/ui.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersComponent,
    UserComponent,
    CreateUserComponent,
    UpdateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    UiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
