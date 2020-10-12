let money, time

function start() {

	// while повториться, если одно из условий выполниться:
	// не число isNaN(money)
	// равна пустой строке
	// нажата ли кнопка отмена
	while( isNaN(money) || money == '' || money == null) {
		money = prompt('Ваш бюджет на месяц?', '150000')
	}
	time = prompt('Введите дату в формате YYYY-MM-DD', '2020-12-12')
}
start()


let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: true,
	chooseExpenses: function() {
		for (let i = 0; i < 2; i++) {
		let a = prompt('Введите обязательную статью расходов в этом месяце', `Квартира ${i + 1}`),
			b = prompt('Во сколько обойдется?', '30000')

			if ( (typeof(a)) === 'string' && a != null && a != '' && (a.length < 50) && b != null && b != '' ) {
				appData.expenses[a] = b
			} else {
				i = i - 1
			}
		}
	},
	detectLevel: function() {
		switch( true ) {
		case (money < 50000):
			console.log('Низкий уровень достатка')
			break
		case (money < 100000 && money >= 50000):
			console.log('Средний уровень достатка')
			break
		case (money > 100000):
			console.log('Высокий уровень достатка')
			break
		default:
			console.log('Нет данных')
		}
	},
	detectDayBudget: function() {
		appData.budgetPerDay = (money/30).toFixed(2)
		console.log(appData.budgetPerDay)
	},
	checkSaving: function() {
		if (appData.savings) {
		let a = +prompt('Какова сумма накоплений?', '100000'),
			b = +prompt('Под какой процент?', '4')
			appData.income.monthIncome = '$' +(a/100/12*b).toFixed(2)
			alert('Доход в месяц: ' + appData.income.monthIncome)
		} else {
			console.log('You have no saving.')
		}
	},
	chooseOptExpenses: function() {
		for (let i = 0; i < 3; i++) {
			let a = prompt(`Статья необязательных расходов ? `, '')
			appData.optionalExpenses[i + 1] = a
		}
	},
	chooseIncome: function() {
		let items = prompt('Дополнительные статьи дохода (через запятую и пробел)', '')
		while ( items == '' || items == null ) {
			items = prompt('Дополнительные статьи дохода (через запятую и пробел)', '')
		}
		this.income = items.split(', ')
		//this.income.push( prompt('Что-то еще?', '') )
		this.income.sort()

		let mes = ''
		appData.income.forEach( function(item,i){
			mes += `${i+1}. ${item};<br>`
		})
		document.write('Способы доп. доходов: <br>' + mes)
	}

}
appData.chooseIncome()
console.log('Наша программа включает в себя данные: ')
for (item in appData) {
	console.log(item + ': ' + appData[item])
}


console.log(appData)