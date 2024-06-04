import React from 'react'
import { initGlobalContext } from './GlobalContext'
import {
	DateFilter,
	FiltersData,
	ListFilter,
	StringFilter,
} from '../components/Filters/FiltersTypes'

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
class SelectTaskFilters extends FiltersData {
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
	request: any
	// Застрахованный - ваще хз спросить надо
	insured: any

	constructor() {
		super()

		this.number = new StringFilter()
		this.status = new ListFilter()
		this.type = new ListFilter()
		this.sort = new ListFilter()
		this.createdAt = new DateFilter()
		this.controledAt = new DateFilter()
		this.author = new ListFilter()
		this.executor = new ListFilter()
		this.request = undefined
		this.insured = undefined
	}
}

export const selectTaskContext = initGlobalContext<SelectTaskData>(new SelectTaskData())
