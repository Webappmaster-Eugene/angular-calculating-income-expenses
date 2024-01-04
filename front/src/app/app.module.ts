import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ToastrModule } from 'ngx-toastr'
import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component'
import { HomeComponent } from './pages/home/home.component'
import { LoginComponent } from './pages/login/login.component'
import { ProfileComponent } from './pages/profile/profile.component'
import { SignupComponent } from './pages/signup/signup.component'
import { HeaderComponent } from './components/header/header.component'
import { CategoriesComponent } from './components/categories/categories.component'
import { TransactionsFormComponent } from './components/transactions-form/transactions-form.component'
import { TransactionsTableComponent } from './components/transactions-table/transactions-table.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { ReactiveFormsModule } from '@angular/forms'
import { AuthInterceptor } from './interceptors/auth.interceptor'
import { NgxPaginationModule } from 'ngx-pagination'

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		LoginComponent,
		ProfileComponent,
		SignupComponent,
		HeaderComponent,
		CategoriesComponent,
		TransactionsFormComponent,
		TransactionsTableComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FontAwesomeModule,
		ReactiveFormsModule,
		HttpClientModule,
		BrowserAnimationsModule,
		ToastrModule.forRoot(),
		NgxPaginationModule,
	],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: AuthInterceptor,
			multi: true,
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
