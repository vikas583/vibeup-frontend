import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from "./authguard/auth.guard";

const routes: Routes = [
	{ path: '', loadChildren: () => import('./layout/layout.module').then((m) => m.LayoutModule), canActivate :[AuthGuard]},
	{ path: 'signup', loadChildren: () => import('./signup/signup.module').then((m) => m.SignupModule), },
	{ path: 'login', loadChildren: () => import('./login/login.module').then((m) => m.LoginModule), },
	// { path: 'home', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule), },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
