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
	/** Состояние оберток фильтров */
	filterStates: SelectTaskFiltersStates
	/** Номер обращения */
	tasksList: string

	constructor() {
		this.filters = new SelectTaskFilters()
		this.filterStates = new SelectTaskFiltersStates()
	}
}

/** Состояние оберток фильтров */
class SelectTaskFiltersStates {
	// Номер задачи
	number: boolean
	// Статус задачи
	status: boolean
	// Тип задачи
	type: boolean
	// Вид задачи
	sort: boolean
	// Дата создания
	createdAt: boolean
	// Дата контроля
	controledAt: boolean
	// Автор
	author: boolean
	// Исполнитель
	executor: boolean
	// Обращение
	request: boolean
	// Застрахованный
	insured: boolean

	constructor() {
		this.number = false
		this.status = false
		this.type = false
		this.sort = false
		this.createdAt = false
		this.controledAt = false
		this.author = false
		this.executor = false
		this.request = false
		this.insured = false
	}
}

/** Значения фильтров формы отбора задач */
class SelectTaskFilters implements IFiltersData {
	// Номер задачи
	number: StringFilter
	// Статус задачи
	status: ListFilter
	// Тип задачи
	type: ListFilter
	// Вид задачи
	sort: ListFilter
	// Дата создания
	createdAt: DateFilter
	// Дата контроля
	controledAt: DateFilter
	// Автор
	author: ListFilter
	// Исполнитель
	executor: ListFilter
	// Обращение
	request: StringFilter
	// Застрахованный
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
	}

	reset() {
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
	}
}

export const selectTaskContext = initGlobalContext<SelectTaskData>(new SelectTaskData())
