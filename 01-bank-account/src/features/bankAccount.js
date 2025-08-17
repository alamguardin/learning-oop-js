export class BankAccount {
	#balance = 0;

	constructor(owner) {
		this.owner = owner;
		this.record = [];
	}

	getBalance() {
		return this.#balance;
	}

	/**
	 * Metodo para realizar depositos al balance
	 * @param {number} amount - Cantidad a depositar
	 * @returns
	 */
	deposit(amount) {
		try {
			if (amount <= 0) throw new Error('No cumple la cantidad minima');

			this.#balance += amount;
			return 'Succesfully';
		} catch (error) {
			console.log(error);
			return 'Error';
		}
	}

	withdraw(amount) {
		//
	}

	getRecord() {
		//
	}
}
