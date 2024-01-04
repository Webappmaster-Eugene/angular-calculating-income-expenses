import { Injectable, signal } from '@angular/core'
import { ITransaction, ITransactionData } from '../types/transaction.interface'
import { HttpClient } from '@angular/common/http'
import { ToastrService } from 'ngx-toastr'
import { tap } from 'rxjs'
import { CategoryService } from './category.service'

@Injectable({
	providedIn: 'root',
})
export class TransactionService {
	transactionsSig = signal<ITransaction[]>([])

	constructor(
		private readonly http: HttpClient,
		private readonly toastr: ToastrService,
		private categoryService: CategoryService
	) {}

	findAll() {
		return this.http
			.get<ITransaction[]>('transactions')
			.subscribe((res) => this.transactionsSig.set(res))
	}

	create(data: ITransactionData) {
		return this.http
			.post<ITransaction>('transactions', data)
			.pipe(
				tap((newTransaction) => {
					const category = this.categoryService
						.categoriesSig()
						.find((ctg) => ctg.id === newTransaction.category?.id)

					this.transactionsSig.update((transactions) => [
						{ ...newTransaction, category },
						...transactions,
					])
				})
			)
			.subscribe(() => this.toastr.success('created'))
	}

	delete(id: number) {
		this.http.delete(`transactions/transaction/${id}`).subscribe(() => {
			this.transactionsSig.update((transactions) =>
				transactions.filter((transaction) => transaction.id !== id)
			)

			this.toastr.warning('deleted')
		})
	}
}
