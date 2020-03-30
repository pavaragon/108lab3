import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { ConverterComponent } from './components/converter/converter.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';


// register the routes (psths) for you pages

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'contact', component: ContactPageComponent},
  {path: 'converter', component:ConverterComponent},
  {path: 'userRegister',component:UserRegisterComponent},
  {path: 'userLogin',component:UserLoginComponent},
  {path: 'userList',component:UserListComponent},
  {path: 'todoList',component:TodoListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
