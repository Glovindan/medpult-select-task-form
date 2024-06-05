import React from 'react'
import { initGlobalContext } from './GlobalContext'
import {
	DateFilter,
	IFiltersData,
	ListFilter,
	StringFilter,
} from '../../UIKit/Filters/FiltersTypes'

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

/** Значения фильтров формы отбора задач */
class SelectTaskFilters implements IFiltersData {
	// Номер задачи - строчька
	number: StringFilter
	// Статус задачи - флажки
	status: ListFilter
	// Тип задачи - флажки
	type: ListFilter
	// Вид задачи - хрень какая-то
	sort: ListFilter
	// Дата создания - дата с по
	createdAt: DateFilter
	// Дата контроля - дата с по
	controledAt: DateFilter
	// Автор - хрень какая-то
	author: ListFilter
	// Исполнитель - хрень какая-то
	executor: ListFilter
	// Обращение - ваще хз спросить надо
	request: StringFilter
	// Застрахованный - ваще хз спросить надо
	insured: StringFilter

	constructor() {
		this.number = new StringFilter('number')
		this.status = new ListFilter('status')
		this.type = new ListFilter('type')
		this.sort = new ListFilter('sort')
		this.createdAt = new DateFilter('createdAt')
		this.controledAt = new DateFilter('controledAt')
		this.author = new ListFilter('author')
		this.executor = new ListFilter('executor')
		this.request = new StringFilter('request')
		this.insured = new StringFilter('insured')

		console.log(this)
	}

	reset(): SelectTaskFilters {
		this.number.reset()
		this.status.reset()
		this.type.reset()
		this.sort.reset()
		this.createdAt.reset()
		this.controledAt.reset()
		this.author.reset()
		this.executor.reset()
		this.request.reset()
		this.insured.reset()

		return this
	}
}

export const selectTaskContext = initGlobalContext<SelectTaskData>(new SelectTaskData())
