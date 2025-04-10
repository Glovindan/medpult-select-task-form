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
			console.log('onClickSearch is not mounted')
		}
		this.elementsCount = 0
	}
}

/** Состояние оберток фильтров */
export class SelectTaskFiltersStates {
	/**Застрахованные */
	/** ФИО */
	fio: boolean
	/** Полис */
	policy: boolean
	/** Дата рождения */
	dataBt: boolean

	/**Задачи */
	/** Номер задачи */
	number: boolean
	/** Статус задачи */
	status: boolean
	/** Вид задачи */
	sort: boolean
	/** Тип задачи */
	type: boolean
	/** Срочность*/
	urgency: boolean
	/** Дата создания */
	createdAt: boolean
	/** Дата контроля */
	controledAt: boolean
	/** Автор */
	author: boolean
	/** Группа автора */
	authorGroup: boolean
	/** Исполнитель */
	executor: boolean
	/** Группа исполнителя */
	executorGroup: boolean

	/**Прочее */
	/** Канал */
	channel: boolean
	/** Страхователь */
	insurer: boolean
	/** Форма согласования */
	formApproval: boolean
	/** Статус согласования */
	statusApproval: boolean
	/** Срок согласования */
	termApproval: boolean

	constructor() {
		this.fio = true
		this.policy = true
		this.dataBt = true

		this.number = true
		this.status = true
		this.sort = true
		this.type = true
		this.urgency = true
		this.createdAt = true
		this.controledAt = true
		this.author = true
		this.authorGroup = true
		this.executor = true
		this.executorGroup = true

		this.channel = true
		this.insurer = true
		this.formApproval = true
		this.statusApproval = true
		this.termApproval = true
	}
}

/** Значения фильтров формы отбора задач */
export class SelectTaskFilters implements IFiltersData {
	/** Коллективное?*/
	isCollective: ListFilter

	/**Застрахованные */
	/** ФИО */
	fio: StringFilter
	/**Полис */
	policy: StringFilter
	/** Дата рождения */
	dataBt: DateFilter

	/**Задачи */
	/** Номер задачи */
	number: StringFilter
	/** Статус задачи */
	status: ListFilter
	/** Вид задачи */
	sort: ListFilter
	/** Тип задачи */
	type: ListFilter
	/** Срочность */
	urgency: ListFilter
	/** Дата создания */
	createdAt: DateFilter
	/** Дата контроля */
	controledAt: DateFilter
	servicesApproved: ListFilter
	/** Автор */
	author: ListFilter
	/** Группа автора */
	authorGroup: ListFilter
	/** Исполнитель */
	executor: ListFilter
	/** Группа исполнителя */
	executorGroup: ListFilter

	/**Прочее */
	/** Канал */
	channel: ListFilter
	/**Страхователь */
	insurer: StringFilter
	/** Форма согласования */
	formApproval: ListFilter
	/** Статус согласования */
	statusApproval: ListFilter
	/** Срок согласования */
	termApproval: DateFilter

	constructor(selectTaskFilters?: SelectTaskFilters) {
		this.isCollective = new ListFilter('isCollective', '', selectTaskFilters?.isCollective?.values)

		this.fio = new StringFilter('fio', 'ФИО', selectTaskFilters?.fio.value)
		this.policy = new StringFilter('policy', 'Полис', selectTaskFilters?.policy.value)
		this.dataBt = new DateFilter('dataBt', 'Дата рождения', {
			valueFrom: selectTaskFilters?.dataBt.valueFrom,
			valueTo: selectTaskFilters?.dataBt.valueTo,
		})

		this.number = new StringFilter('number', 'Номер задачи', selectTaskFilters?.number.value)
		this.status = new ListFilter('status', 'Статус задачи', selectTaskFilters?.status.values)
		this.sort = new ListFilter('sort', 'Вид задачи', selectTaskFilters?.sort.values)
		this.type = new ListFilter('type', 'Тип задачи', selectTaskFilters?.type.values)
		this.urgency = new ListFilter('urgency', 'Срочность', selectTaskFilters?.urgency.values)
		this.createdAt = new DateFilter('createdAt', 'Дата создания', {
			valueFrom: selectTaskFilters?.createdAt.valueFrom,
			valueTo: selectTaskFilters?.createdAt.valueTo,
		})
		this.controledAt = new DateFilter('controledAt', 'Дата контроля', {
			valueFrom: selectTaskFilters?.controledAt.valueFrom,
			valueTo: selectTaskFilters?.controledAt.valueTo,
		})

		this.servicesApproved = new ListFilter(
			'servicesApproved',
			'Согласованные услуги',
			selectTaskFilters?.servicesApproved?.values
		)

		this.author = new ListFilter('author', 'Автор', selectTaskFilters?.author.values)
		this.authorGroup = new ListFilter(
			'authorGroup',
			'Группа автора',
			selectTaskFilters?.authorGroup.values
		)
		this.executor = new ListFilter('executor', 'Исполнитель', selectTaskFilters?.executor.values)
		this.executorGroup = new ListFilter(
			'executorGroup',
			'Группа исполнителя',
			selectTaskFilters?.executorGroup.values
		)

		this.channel = new ListFilter('channel', 'Канал', selectTaskFilters?.channel.values)
		this.insurer = new StringFilter('insurer', 'Страхователь', selectTaskFilters?.insurer.value)
		this.formApproval = new ListFilter(
			'formApproval',
			'Форма согласования',
			selectTaskFilters?.formApproval.values
		)
		this.statusApproval = new ListFilter(
			'statusApproval',
			'Статус согласования',
			selectTaskFilters?.statusApproval.values
		)
		this.termApproval = new DateFilter('termApproval', 'Срок согласования', {
			valueFrom: selectTaskFilters?.termApproval.valueFrom,
			valueTo: selectTaskFilters?.termApproval.valueTo,
		})
	}

	reset() {
		this.fio.reset()
		this.policy.reset()
		this.dataBt.reset()

		this.number.reset()
		this.status.reset()
		this.sort.reset()
		this.type.reset()
		this.urgency.reset()
		this.createdAt.reset()
		this.controledAt.reset()
		this.author.reset()
		this.authorGroup.reset()
		this.executor.reset()
		this.executorGroup.reset()

		this.channel.reset()
		this.insurer.reset()
		this.formApproval.reset()
		this.statusApproval.reset()
		this.termApproval.reset()
	}
}

export const selectTaskContext = initGlobalContext<SelectTaskData>(new SelectTaskData())
