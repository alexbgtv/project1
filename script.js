let money = prompt('Ваш бюджет на месяц?'),
	time = prompt('Введите дату в формате YYYY-MM-DD'),
	appData = {
		'budget': money,
		'timeData': time,
		'expenses': {
			// prompt('Введите обязательную статью расходов в этом месяце') : prompt('Во сколько обойдется?')
		}
	}

/*
5) Вывести на экран пользователя бюджет на 1 день (брать месяц за 30 дней, использовать alert)
6) Проверить, чтобы все работало без ошибок в консоли
7) Создать свой репозиторий на GitHub и поместить туда папку с первым заданием
*/


date.insertAdjacentHTML('beforeend', `<span>${time} руб.</span>`)
budget.insertAdjacentHTML('beforeend', `<span>${money} руб.</span>`)
dayBudget.insertAdjacentHTML('beforeend', `<span>${money/30} руб.</span>`)


