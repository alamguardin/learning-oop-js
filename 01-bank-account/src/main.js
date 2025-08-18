import './style.css';
import { BankAccount } from './features/bankAccount';

const account = new BankAccount('Alam');

document.addEventListener('DOMContentLoaded', () => {
	const grettingHeading = document.getElementById('head-title');
	const currentBalance = document.getElementById('current-balance');
	const inputFieldDeposit = document.getElementById('deposit-input');
	const btnDeposit = document.getElementById('deposit-btn');
	const inputFieldWithdraw = document.getElementById('withdraw-input');
	const btnWithdraw = document.getElementById('withdraw-btn');
	const recordList = document.getElementById('record-list');

	// Set the owner in the greeting header
	grettingHeading.innerHTML = `Hola, ${account.owner}`;

	// Set current Balance into balance card
	currentBalance.innerHTML = `$${account.getBalance()}`;

	// Set record list into record component
	function updateRecord() {
		const recordItems = account.getRecord().map((item) => {
			return `
            <li class="list-item ${item.type === 'withdraw' ? 'dark' : ''}">
                <span class="list-item-type">${item.type}</span>
                <span class="list-item-amount">$${item.amount}</span>
            </li>
            `;
		});

		recordList.innerHTML = recordItems.toString().replaceAll(',', '');
	}

	// Update current balance
	btnDeposit.addEventListener('click', () => {
		const depositAmount = Number(inputFieldDeposit.value);
		account.deposit(depositAmount);

		currentBalance.innerHTML = `$${account.getBalance()}`;
		inputFieldDeposit.value = '';
		updateRecord();
	});

	btnWithdraw.addEventListener('click', () => {
		const withdrawAmount = Number(inputFieldWithdraw.value);
		account.withdraw(withdrawAmount);

		currentBalance.innerHTML = `$${account.getBalance()}`;
		inputFieldWithdraw.value = '';
		updateRecord();
	});
});
