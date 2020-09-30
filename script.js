let money, time




function start() {
	money = +prompt('Ваш бюджет на месяц?')
	time = prompt('Введите дату в формате YYYY-MM-DD', '2020.09.30')

	while(money == '' || money == null || isNaN(money)) {
		money = +prompt('Ваш бюджет на месяц?')
	}
}

start()
let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: true
}

function chooseExpenses () {
	for (let i = 0; i < 2; i++) {
		let a = prompt('Введите обязательную статью расхода.', ''),
			b = +prompt('Во сколько обойдется?', '')

		if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
			&& a != '' && b != '' && a.length < 50) {
			appData.expenses[a] = +b
			console.log('done')
		} else {
			i = i - 1
		}
	}
}

chooseExpenses()


function detectDayBudget() {
	appData.moneyPerDay = +(appData.budget / 30).toFixed(2)
}

detectDayBudget()

function detectLevel() {
	switch (true) {
		case ( appData.budget > 100000):
			console.log('Богатый клиент')
			break
		case (appData.budget < 100000 && appData.budget > 50000):
			console.log('Клиент со средним достатком')
			break
		default:
			console.log('Нищеброд: ' + appData.budget)
			break
	}
}

detectLevel()


function checkSavings() {
	if (appData.savings == true) {
		let save = +prompt('Какова сумма накоплений?', ''),
			percent = +prompt('Под какой процент?', '')

		appData.monthIncome = +(save/100/12*percent).toFixed(2)
		alert('Доход с вашего депозита: ' + appData.monthIncome)
	}
}

checkSavings()

function chooseOptExpenses() {
	let a = prompt('Статья необязательных расходов?', ''),
		b = +prompt('Во сколько обойдется?', '')

		for (let i = 0; i < 3; i++) {
			a = prompt('Статья необязательных расходов?', ''),
			b = +prompt('Во сколько обойдется "' + a + '"?', '')
		}
	appData.optionalExpenses[a] = b
}

chooseOptExpenses()


console.log(appData)


