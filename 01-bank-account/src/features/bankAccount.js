export class BankAccount {
	#balance = 0;
	#record = [];

	/**
	 * Constructor de nuestra clase
	 * @param {string} owner - Nombre del propietario
	 */
	constructor(owner) {
		this.owner = owner;
	}

	/**
	 * Actualizar historial de movimientos
	 * @param {string} type - Tipo de transacción
	 * @param {number} amount - Cantidad del deposito|Retiro
	 */
	#updateRecord(type, amount) {
		this.#record.push({
			type: type,
			amount: amount,
		});
	}

	/**
	 * Obtener balance actual de la cuanta
	 * @returns {number} Balance actual
	 */
	getBalance() {
		return this.#balance;
	}

	/**
	 * Realizar depositos al balance actual
	 * @param {number} amount - Cantidad a depositar
	 * @returns {string} Estado de la transacción
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

	/**
	 * Realizar retiros al balance actual
	 * @param {number} amount - Cantidad a retirar
	 * @returns {string} Estado de la transacción
	 */
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

	/**
	 * Obtener una lista del historial de movimientos
	 * @returns {Object[]} Arreglo de movimientos
	 */
	getRecord() {
		return this.#record;
	}
}
