import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './pages/home/home.component'
import { LoginComponent } from './pages/login/login.component'
import { SignupComponent } from './pages/signup/signup.component'
import { ProfileComponent } from './pages/profile/profile.component'
import { authGuard } from './guards/auth.guard'

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
		title: 'Home',
		canActivate: [authGuard()],
	},
	{
		path: 'login',
		component: LoginComponent,
	},
	{
		path: 'signup',
		component: SignupComponent,
	},
	{
		path: 'profile',
		component: ProfileComponent,
		canActivate: [authGuard()],
	},
	{
		path: '**',
		component: HomeComponent,
		redirectTo: '',
	},
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
