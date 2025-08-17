export class BankAccount {
	#balance = 0;
	#record = [];

	constructor(owner) {
		this.owner = owner;
	}

	#updateRecord(type, amount) {
		this.#record.push({
			type: type,
			amount: amount,
		});
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
			this.#updateRecord('deposit', amount);
			return 'Succesfully';
		} catch (error) {
			console.log(error);
			return 'Error';
		}
	}

	withdraw(amount) {
		try {
			if (amount === 0) throw new Error('No cumple la cantidad minima');
			if (amount > this.#balance)
				throw new Error('Cantidad no disponible en el balance actual');

			this.#balance = this.#balance - amount;
			this.#updateRecord('withdraw', amount);
			return 'Succesfully';
		} catch (error) {
			console.log(error);
			return 'Error';
		}
	}

	getRecord() {
		return this.#record;
	}
}
