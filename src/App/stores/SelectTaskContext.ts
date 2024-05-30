import React from 'react'
import { initGlobalContext } from './GlobalContext'

/** Данные обращения */
class SelectTaskData {
	/** Фильтры поиска */
	filters: SelectTaskFilters
	/** Номер обращения */
	tasksList: string

	constructor() {
		this.filters = new SelectTaskFilters()
	}
}

// TODO: Вынести отдельно

/** Интерфейс фильтров */
interface IFilter {
	/** Сброс фильтра */
	reset(): void
}

/** Операторы фильтров по строке */
enum StringFilterOperator {
	/** Равно */
	eq = 'eq',
	/** Неравно */
	neq = 'neq',
	/** Содержит */
	like = 'like',
}

/** Фильтр по строке */
class StringFilter implements IFilter {
	/** Значение */
	value: string
	/** Оператор (по умолчанию Содержит) */
	operator: StringFilterOperator

	constructor() {
		this.reset()
	}

	reset(): void {
		this.value = ''
		this.operator = StringFilterOperator.like
	}
}

// TODO: Вынести отдельно ^^^^

class SelectTaskFilters {
	// Номер задачи - строчька
	number: StringFilter
	// Статус задачи - флажки
	// Тип задачи - флажки
	// Вид задачи - хрень какая-то
	// Дата создания - дата с по
	// Дата контроля - дата с по
	// Автор - хрень какая-то
	// Исполнитель - хрень какая-то
	// Обращение - ваще хз спросить надо
	// Застрахованный - ваще хз спросить надо

	constructor() {}
}

export const selectTaskContext = initGlobalContext<SelectTaskData>(new SelectTaskData())
