import { Component } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { AuthService } from 'src/app/services/auth.service'

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
	userData: FormGroup

	constructor(private readonly authService: AuthService) {
		this.userData = new FormGroup({
			email: new FormControl('', [Validators.required, Validators.email]),
			password: new FormControl('', [
				Validators.required,
				Validators.minLength(6),
			]),
		})
	}

	onSubmit() {
		if (this.userData.valid) {
			this.authService.login(this.userData.value)
		} else {
			console.log('not valid')
		}
	}
}
