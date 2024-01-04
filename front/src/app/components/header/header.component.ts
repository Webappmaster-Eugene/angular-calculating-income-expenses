import { Component } from '@angular/core'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { AuthService } from 'src/app/services/auth.service'

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
	logoutIcon = faArrowRightFromBracket

	constructor(public authService: AuthService) {}

	logoutHandler() {
		this.authService.logout()
	}
}
