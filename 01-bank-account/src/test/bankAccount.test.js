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

test('Comprobar que se actualize el historial después de cada movimiento', () => {
	const account = new BankAccount('Jhon');

	account.deposit(150);
	account.withdraw(100);
	account.deposit(30);

	const currentRecord = account.getRecord();

	expect(currentRecord.length).toBe(3);
	expect(currentRecord[0].type).toBe('deposit');
	expect(currentRecord[0].amount).toBe(150);
	expect(currentRecord[1].type).toBe('withdraw');
	expect(currentRecord[1].amount).toBe(100);
});
