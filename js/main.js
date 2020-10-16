let money, time, currancy = '₽ '

	btnStart = document.querySelector('#start'),

// Value
	budgetValue = document.querySelector('.budget-value'),
	daybudgetValue = document.querySelector('.daybudget-value'),
	levelValue = document.querySelector('.level-value'),
	expensesValue = document.querySelector('.expenses-value'),
	optionalExpensesValue = document.querySelector('.optionalexpenses-value'),
	incomeValue = document.querySelector('.income-value'),
	monthSavingsValue = document.querySelector('.monthsavings-value'),
	yearSavingsValue = document.querySelector('.yearsavings-value'),
	yearValue = document.querySelector('.year-value'),
	monthValue = document.querySelector('.month-value'),
	dayValue = document.querySelector('.day-value'),

// Input
	
	expensesItem = document.querySelectorAll('.expenses-item'),
	optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
	chooseIncome = document.querySelector('.choose-income'),
	chooseSum = document.querySelector('.choose-sum'),
	choosePercent = document.querySelector('.choose-percent'),

// Button
	expensesItemBtn = document.querySelector('.expenses-item-btn'),
	optionalExpensesBtn = document.querySelector('.optionalexpenses-btn'),
	countBudgetBtn = document.querySelector('.count-budget-btn'),


// Other
	checkSavings = document.querySelector('#savings')



btnStart.addEventListener('click', function(event) {

	time = prompt('Введите дату', '')

	while( isNaN(money) || money == '' || money == null) {
		money = prompt('Ваш бюджет на месяц?', '150000')
	}

	while(  currancy == '' || currancy == null) {
		currancy = prompt('Валюта', '₽')
	}

	budgetValue.textContent = currancy + money
	
	if (time == '' || time == null) {
		time = new Date
	}

	yearValue.value = new Date(Date.parse(time)).getFullYear()
	monthValue.value = new Date(Date.parse(time)).getMonth() + 1
	dayValue.value = new Date(Date.parse(time)).getDate()

	expensesItemBtn.disabled = false
	optionalExpensesBtn.disabled = false
	countBudgetBtn.disabled = false

})

expensesItemBtn.addEventListener('click', function() {

	let sum = 0


	for (let i = 0; i < expensesItem.length; i++) {
		let a = expensesItem[i].value,
			b = expensesItem[++i].value



			if ( (typeof(a)) === 'string' && a != null && a != '' && (a.length < 50) && b != null && b != '' ) {
				appData.expenses[a] = b
				sum += +b 
			} else {
				i = i - 1
			}
		}
		expensesValue.textContent = currancy + sum

})

optionalExpensesBtn.addEventListener('click', function() {

	for (let i = 0; i < optionalExpensesItem.length; i++) {
			let a = optionalExpensesItem[i].value
			appData.optionalExpenses[i] = a
			optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' '
	}
	
})

countBudgetBtn.addEventListener('click', function() {


	let sum = 0

	for (let item in appData.expenses) {
		sum += +appData.expenses[item]
	}


	appData.budgetPerDay = currancy + ((money - sum )/30).toFixed(2)
	daybudgetValue.textContent = appData.budgetPerDay

	switch( true ) {
		case (money < 50000):
			levelValue.textContent = 'Низкий уровень достатка'
			break
		case (money < 100000 && money >= 50000):
			levelValue.textContent = 'Средний уровень достатка'
			break
		case (money > 100000):
			levelValue.textContent = 'Высокий уровень достатка'
			break
		default:
			levelValue.textContent = 'Нет данных'
		}

})

chooseIncome.addEventListener('input', function() {
	let a = chooseIncome.value
	appData.income = a.split(', ')
	incomeValue.textContent = appData.income
})

checkSavings.addEventListener('click', function() {

	if (appData.savings == true) {

		appData.savings = false
		chooseSum.setAttribute('readonly', 'true')
		choosePercent.setAttribute('readonly', 'true')

	} else {

		appData.savings = true
		chooseSum.removeAttribute('readonly')
		choosePercent.removeAttribute('readonly')
	}
})

chooseSum.addEventListener('input', function(){
	if (appData.savings == true) {
		let sum = chooseSum.value,
			persent = choosePercent.value

		appData.income.monthIncome = currancy +(sum/100/12*persent).toFixed(1)
		appData.income.yearIncome = currancy +(sum/100*persent).toFixed()

		monthSavingsValue.textContent = appData.income.monthIncome
		yearSavingsValue.textContent = appData.income.yearIncome
	}
})

choosePercent.addEventListener('input', function(){
	if (appData.savings == true) {
		let sum = chooseSum.value,
			persent = choosePercent.value

		appData.income.monthIncome = currancy +(sum/100/12*persent).toFixed(1)
		appData.income.yearIncome = currancy +(sum/100*persent).toFixed()

		monthSavingsValue.textContent = appData.income.monthIncome
		yearSavingsValue.textContent = appData.income.yearIncome
	}
})





let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false,
}


console.log(appData)