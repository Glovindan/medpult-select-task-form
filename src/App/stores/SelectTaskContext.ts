import React from 'react'
import { initGlobalContext } from './GlobalContext'
import {
	AppFilter,
	DateFilter,
	IFiltersData,
	ListFilter,
	StringFilter,
} from '../../UIKit/Filters/FiltersTypes'

/** Данные обращения */
export class SelectTaskData {
	/** Фильтры поиска */
	filters: SelectTaskFilters
	/** Состояние оберток фильтров */
	filterStates: SelectTaskFiltersStates
	/** Обработчик нажатия на кнопку поиск */
	onClickSearch: () => Promise<void>
	/** Количество отобранных элементов */
	elementsCount: number

	constructor() {
		this.filters = new SelectTaskFilters()
		this.filterStates = new SelectTaskFiltersStates()
		this.onClickSearch = async () => {
			alert('test')
		}
		this.elementsCount = 0
	}
}

/** Состояние оберток фильтров */
export class SelectTaskFiltersStates {
	/** Номер задачи */
	number: boolean
	/** Статус задачи */
	status: boolean
	/** Тип задачи */
	type: boolean
	/** Вид задачи */
	sort: boolean
	/** Дата создания */
	createdAt: boolean
	/** Дата контроля */
	controledAt: boolean
	/** Автор */
	author: boolean
	/** Исполнитель */
	executor: boolean
	/** Обращение */
	request: boolean
	/** Застрахованный */
	insured: boolean
	/** Группа автора */
	authorGroup: boolean
	/** Группа исполнителя */
	executorGroup: boolean

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
		this.authorGroup = false
		this.executorGroup = false
	}
}

/** Значения фильтров формы отбора задач */
export class SelectTaskFilters implements IFiltersData {
	/** Номер задачи */
	number: StringFilter
	/** Статус задачи */
	status: ListFilter
	/** Тип задачи */
	type: ListFilter
	/** Вид задачи */
	sort: ListFilter
	/** Дата создания */
	createdAt: DateFilter
	/** Дата контроля */
	controledAt: DateFilter
	/** Автор */
	author: ListFilter
	/** Группа автора */
	authorGroup: ListFilter
	/** Исполнитель */
	executor: ListFilter
	/** Группа исполнителя */
	executorGroup: ListFilter
	/** Обращение */
	request: AppFilter
	/** Застрахованный */
	insured: AppFilter

	constructor() {
		this.number = new StringFilter('number', 'номер задачи')
		this.status = new ListFilter('status', 'статус задачи')
		this.type = new ListFilter('type', 'тип задачи')
		this.sort = new ListFilter('sort', 'вид задачи')
		this.createdAt = new DateFilter('createdAt', 'дата создания')
		this.controledAt = new DateFilter('controledAt', 'дата контроля')
		this.author = new ListFilter('author', 'автор')
		this.authorGroup = new ListFilter('authorGroup', 'группа автора')
		this.executor = new ListFilter('executor', 'исполнитель')
		this.executorGroup = new ListFilter('executorGroup', 'группа исполнителя')
		this.request = new AppFilter('request', 'обращение')
		this.insured = new AppFilter('insured', 'застрахованный')
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
