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

test('Debería lanzar un error al intentar depositar un valor en cero o negativo', () => {
	const account = new BankAccount('Jhon');

	const depositState = account.deposit(0);
	expect(depositState).toBe('Error');
});

test('No debería poder realizar un retiro mayor al disponible', () => {
	const account = new BankAccount('Jhon');

	account.deposit(250);

	const withdrawState = account.withdraw(300);
	expect(withdrawState).toBe('Error');
});

test('Realizar retiro: debería actualizarce el balance actual', () => {
	const account = new BankAccount('Jhon');

	account.deposit(200);
	account.withdraw(100);

	expect(account.getBalance()).toBe(100);
});
