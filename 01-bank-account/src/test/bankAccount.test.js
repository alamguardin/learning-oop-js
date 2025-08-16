import { expect, test } from 'vitest';
import { BankAccount } from '../features/bankAccount';

test('Instanciar clase: Debería retornar nombre de usuario', () => {
	const account = new BankAccount('Jhon');

	expect(account.owner).toBe('Jhon');
});

test('Debería retornar el balance actual', () => {
	const account = new BankAccount('Jhon');

	expect(account.getBalance()).toBe(0);
});

test('Realizar deposito: Debería actualizarce al balance actual', () => {
	const account = new BankAccount('Jhon');

	account.deposit(100);
	expect(account.getBalance()).toBe(100);
});
