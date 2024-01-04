import { Injectable, signal } from '@angular/core'
import { IUser } from '../types/user.interface'
import { HttpClient } from '@angular/common/http'

@Injectable({
	providedIn: 'root',
})
export class UserService {
	userSig = signal<IUser>({} as IUser)

	constructor(private readonly http: HttpClient) {}

	getMe() {
		return this.http
			.get<IUser>('auth/profile')
			.subscribe((data) => this.userSig())
	}
}
