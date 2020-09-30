let money = +prompt('Ваш бюджет на месяц?'),
	time = prompt('Введите дату в формате YYYY-MM-DD'),
	appData = {
		budget: money,
		expenses: {},
		optionalExpenses: {},
		income: [],
		timeData: time,
		savings: false
	}

for (let i = 0; i < 2; i++) {
	let a = prompt('Введите обязательную статью расхода.', ''),
		b = +prompt('Во сколько обойдется?', '')

		if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
			&& a != '' && b != '' && a.length < 50) {
			appData.expenses[a] = b
			console.log('done')
		} else {
			a = prompt('Введите обязательную статью расхода.', ''),
			b = +prompt('Во сколько обойдется?', '')
		}
}


appData.moneyPerDay = appData.budget / 30

alert(appData.moneyPerDay)

switch (true) {
	case ( appData.budget > 100000):
		console.log('богатый клиент')
		break
	case (appData.budget < 100000 && appData.budget > 50000):
		console.log('клиент со средним достатком')
		break
	default:
		console.log('нищеброд:' + appData.budget)
		break
}



