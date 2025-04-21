import React, { useEffect, useState } from 'react'
import FiltersWrapper from '../../../UIKit/Filters/FiltersWrapper/FiltersWrapper'
import FilterItemWrapperHeader from '../../../UIKit/Filters/FilterItems/FilterItemWrapperHeader/FilterItemWrapperHeader'
import FilterItemString from '../../../UIKit/Filters/FilterItems/FilterItemString/FilterItemString'
import { selectTaskContext } from '../../stores/SelectTaskContext'
import { ObjectItem, IFilter, StringFilter } from '../../../UIKit/Filters/FiltersTypes'
import FilterItemCategory from '../../../UIKit/Filters/FilterItems/FilterItemCategory/FilterItemCategory'
import FilterItemDates from '../../../UIKit/Filters/FilterItems/FilterItemDates/FilterItemDates'
import FilterItemSearch from '../../../UIKit/Filters/FilterItems/FilterItemSearch/FilterItemSearch'
import FilterItemCategorySearch from '../../../UIKit/Filters/FilterItems//FilterItemCategorySearch/FilterItemCategorySearch'
import { FetchInputData } from '../../../UIKit/shared/types/types'
import Scripts from '../../shared/utils/clientScripts'
import FilterItemApp from '../../../UIKit/Filters/FilterItems/FilterItemApp/FilterItemApp'
import { saveState, showError } from '../../shared/utils/utils'

interface SelectTaskFiltersProps {
	/** Обработчик нажатия на кнопку Фильтры */
	clickFilterHandler?: () => void
}

/** Фильтры формы отбра задач */
export default function SelectTaskFiltersForm({ clickFilterHandler }: SelectTaskFiltersProps) {
	const { data, setValue } = selectTaskContext.useContext()
	const filters = data.filters

	// Состояния для поисковых полей
	const [searchValues, setSearchValues] = useState<Record<string, string>>({
		sort: '',
		author: '',
		executor: '',
	})

	// Функция для обновления поискового значения
	const setSearchValue = (key: string, value: string) => {
		setSearchValues((prev) => ({ ...prev, [key]: value }))
	}

	/** Изменение значения конкретного фильтра */
	const changeFilterValue = (key: string, value: IFilter) => {
		const currentFilters = filters
		currentFilters[key] = value
		setValue('filters', currentFilters)
	}

	const changeValueConstructor = (key: string) => {
		return (value: IFilter) => changeFilterValue(key, value)
	}

	/** Статусы */
	const [statuses, setStatuses] = useState<ObjectItem[]>([])
	/** Типы */
	const [types, setTypes] = useState<ObjectItem[]>([])
	/** Виды */
	const [sorts, setSorts] = useState<ObjectItem[]>([])
	/** Срочность */
	const [urgency, setUrgency] = useState<ObjectItem[]>([])
	/** Пользователь */
	const [users, setUsers] = useState<ObjectItem[]>([])
	/** Группы пользователей */
	const [usersGroup, setUsersGroup] = useState<ObjectItem[]>([])
	/** Каналы */
	const [channels, setChannels] = useState<ObjectItem[]>([])
	/** Формы согласования */
	const [forms, setForms] = useState<ObjectItem[]>([])
	/** Статусы согласования */
	const [statusesApproval, setStatusesApproval] = useState<ObjectItem[]>([])

	/** Получение вариантов категорий */
	React.useLayoutEffect(() => {
		Scripts.getStatuses().then((items) => setStatuses(items))
		Scripts.getTypes().then((items) => setTypes(items))
		Scripts.getSorts().then((items) => setSorts(items))
		Scripts.getUrgency().then((items) => setUrgency(items))
		Scripts.getUsers().then((items) => setUsers(items))
		Scripts.getUserGroups().then((items) => setUsersGroup(items))
		Scripts.getChannels().then((items) => setChannels(items))
		Scripts.getFormApproval().then((items) => setForms(items))
		Scripts.getStatusApproval().then((items) => setStatusesApproval(items))
	}, [])

	/** Сброс фильтров */
	const resetFilters = () => {
		data.filters.reset()
		setValue('filters', data.filters)
		setSearchValues({
			sort: '',
			author: '',
			executor: '',
		})
	}

	/** Обработчик нажатия на кнопку поиска */
	const searchHandler = async () => {
		// Проверка, выбран ли хотя бы один фильтр
		const isAnyFilterSelected = Object.values(data.filters).some((filter) => {
			if (filter.value !== undefined && filter.value !== '') {
				return true
			}
			if (filter.values && filter.values.length > 0) {
				return true
			}
			if (filter.valueFrom !== undefined || filter.valueTo !== undefined) {
				return true
			}
			return false
		})

		if (!isAnyFilterSelected) {
			//showError('Фильтры не выбраны')
			return
		}
		// Количество отобранных элементов
		const elementsCount = await Scripts.getTasksCount(data.filters)
		setValue('elementsCount', elementsCount)

		// Поиск
		data.onClickSearch()
	}

	const searchSorts = async (page: number, query?: string): Promise<FetchInputData> => {
		const sortsValues = sorts

		if (!query)
			return {
				items: sorts,
				hasMore: false,
			}

		const filterSorts = sortsValues.filter(
			(sort) => sort.value.toLowerCase().indexOf(query.toLowerCase()) != -1
		)
		return {
			items: filterSorts,
			hasMore: false,
		}
	}

	// Установка состояния обертки
	const setIsOpenFactory = (code: string) => {
		return (isOpen: boolean) => {
			const filterStates = data.filterStates

			filterStates[code] = isOpen

			setValue('filterStates', filterStates)
		}
	}

	/** Сохранение состояния формы */
	const saveStateHandler = () => {
		saveState(data)
	}

	/** Ссылка на форму отбора обращения */
	const selectRequestHref = Scripts.getSelectRequestLink()
	/** Ссылка на форму отбора застрахованного */
	const selectInsuredHref = Scripts.getSelectInsuredLink()

	// TODO: Побороть spaghetti 🍝🍝🍝
	return (
		<FiltersWrapper
			searchHandler={searchHandler}
			resetHandler={resetFilters}
			isSearchButtonDisabled={Scripts.getSelectTaskAccessSettings().searchButton < 2}
			clickFilterHandler={clickFilterHandler}
		>
			<FilterItemWrapperHeader title="Застрахованный" isOpenInit={true}>
				<FilterItemString
					setIsOpenInit={setIsOpenFactory(data.filters.fio.fieldCode)}
					isOpenInit={data.filterStates.fio}
					title={data.filters.fio.fieldName}
					filterValue={data.filters.fio}
					setFilterValue={changeValueConstructor(data.filters.fio.fieldCode)}
				/>
				<FilterItemString
					setIsOpenInit={setIsOpenFactory(data.filters.policy.fieldCode)}
					isOpenInit={data.filterStates.policy}
					title={data.filters.policy.fieldName}
					filterValue={data.filters.policy}
					setFilterValue={changeValueConstructor(data.filters.policy.fieldCode)}
				/>
				<FilterItemDates
					setIsOpenInit={setIsOpenFactory(data.filters.dataBt.fieldCode)}
					isOpenInit={data.filterStates.dataBt}
					title={data.filters.dataBt.fieldName}
					filterValue={data.filters.dataBt}
					setFilterValue={changeValueConstructor(data.filters.dataBt.fieldCode)}
				/>
			</FilterItemWrapperHeader>
			<FilterItemWrapperHeader title="Задачи" isOpenInit={true}>
				<FilterItemString
					setIsOpenInit={setIsOpenFactory(data.filters.number.fieldCode)}
					isOpenInit={data.filterStates.number}
					title={data.filters.number.fieldName}
					filterValue={data.filters.number}
					setFilterValue={changeValueConstructor(data.filters.number.fieldCode)}
				/>

				<FilterItemCategory
					setIsOpenInit={setIsOpenFactory(data.filters.status.fieldCode)}
					isOpenInit={data.filterStates.status}
					title={data.filters.status.fieldName}
					variants={statuses}
					filterValue={data.filters.status}
					setFilterValue={changeValueConstructor(data.filters.status.fieldCode)}
				/>
				<FilterItemCategorySearch
					setIsOpenInit={setIsOpenFactory(data.filters.sort.fieldCode)}
					isOpenInit={data.filterStates.sort}
					title={data.filters.sort.fieldName}
					variants={sorts}
					filterValue={data.filters.sort}
					setFilterValue={changeValueConstructor(data.filters.sort.fieldCode)}
					searchValue={searchValues.sort}
					setSearchValue={(value) => setSearchValue('sort', value)}
				/>
				<FilterItemCategory
					setIsOpenInit={setIsOpenFactory(data.filters.type.fieldCode)}
					isOpenInit={data.filterStates.type}
					title={data.filters.type.fieldName}
					variants={types}
					filterValue={data.filters.type}
					setFilterValue={changeValueConstructor(data.filters.type.fieldCode)}
				/>
				<FilterItemCategory
					setIsOpenInit={setIsOpenFactory(data.filters.urgency.fieldCode)}
					isOpenInit={data.filterStates.urgency}
					title={data.filters.urgency.fieldName}
					variants={urgency}
					filterValue={data.filters.urgency}
					setFilterValue={changeValueConstructor(data.filters.urgency.fieldCode)}
				/>
				<FilterItemDates
					setIsOpenInit={setIsOpenFactory(data.filters.createdAt.fieldCode)}
					isOpenInit={data.filterStates.createdAt}
					title={data.filters.createdAt.fieldName}
					filterValue={data.filters.createdAt}
					setFilterValue={changeValueConstructor(data.filters.createdAt.fieldCode)}
				/>
				<FilterItemDates
					setIsOpenInit={setIsOpenFactory(data.filters.controledAt.fieldCode)}
					isOpenInit={data.filterStates.controledAt}
					title={data.filters.controledAt.fieldName}
					filterValue={data.filters.controledAt}
					setFilterValue={changeValueConstructor(data.filters.controledAt.fieldCode)}
				/>

				<FilterItemCategorySearch
					setIsOpenInit={setIsOpenFactory(data.filters.author.fieldCode)}
					isOpenInit={data.filterStates.author}
					title={data.filters.author.fieldName}
					variants={users}
					filterValue={data.filters.author}
					setFilterValue={changeValueConstructor(data.filters.author.fieldCode)}
					searchValue={searchValues.author}
					setSearchValue={(value) => setSearchValue('author', value)}
				/>
				<FilterItemCategory
					setIsOpenInit={setIsOpenFactory(data.filters.authorGroup.fieldCode)}
					isOpenInit={data.filterStates.authorGroup}
					title={data.filters.authorGroup.fieldName}
					variants={usersGroup}
					filterValue={data.filters.authorGroup}
					setFilterValue={changeValueConstructor(data.filters.authorGroup.fieldCode)}
				/>
				<FilterItemCategorySearch
					setIsOpenInit={setIsOpenFactory(data.filters.executor.fieldCode)}
					isOpenInit={data.filterStates.executor}
					title={data.filters.executor.fieldName}
					variants={users}
					filterValue={data.filters.executor}
					setFilterValue={changeValueConstructor(data.filters.executor.fieldCode)}
					searchValue={searchValues.executor}
					setSearchValue={(value) => setSearchValue('executor', value)}
				/>
				<FilterItemCategory
					setIsOpenInit={setIsOpenFactory(data.filters.executorGroup.fieldCode)}
					isOpenInit={data.filterStates.executorGroup}
					title={data.filters.executorGroup.fieldName}
					variants={usersGroup}
					filterValue={data.filters.executorGroup}
					setFilterValue={changeValueConstructor(data.filters.executorGroup.fieldCode)}
				/>
			</FilterItemWrapperHeader>
			<FilterItemWrapperHeader title="Прочее" isOpenInit={true}>
				<FilterItemCategory
					setIsOpenInit={setIsOpenFactory(data.filters.channel.fieldCode)}
					isOpenInit={data.filterStates.channel}
					title={data.filters.channel.fieldName}
					variants={channels}
					filterValue={data.filters.channel}
					setFilterValue={changeValueConstructor(data.filters.channel.fieldCode)}
				/>
				<FilterItemString
					setIsOpenInit={setIsOpenFactory(data.filters.insurer.fieldCode)}
					isOpenInit={data.filterStates.insurer}
					title={data.filters.insurer.fieldName}
					filterValue={data.filters.insurer}
					setFilterValue={changeValueConstructor(data.filters.insurer.fieldCode)}
				/>
				<FilterItemCategory
					setIsOpenInit={setIsOpenFactory(data.filters.formApproval.fieldCode)}
					isOpenInit={data.filterStates.formApproval}
					title={data.filters.formApproval.fieldName}
					variants={forms}
					filterValue={data.filters.formApproval}
					setFilterValue={changeValueConstructor(data.filters.formApproval.fieldCode)}
				/>
				<FilterItemCategory
					setIsOpenInit={setIsOpenFactory(data.filters.statusApproval.fieldCode)}
					isOpenInit={data.filterStates.statusApproval}
					title={data.filters.statusApproval.fieldName}
					variants={statusesApproval}
					filterValue={data.filters.statusApproval}
					setFilterValue={changeValueConstructor(data.filters.statusApproval.fieldCode)}
				/>
				<FilterItemDates
					setIsOpenInit={setIsOpenFactory(data.filters.termApproval.fieldCode)}
					isOpenInit={data.filterStates.termApproval}
					title={data.filters.termApproval.fieldName}
					filterValue={data.filters.termApproval}
					setFilterValue={changeValueConstructor(data.filters.termApproval.fieldCode)}
				/>
			</FilterItemWrapperHeader>
		</FiltersWrapper>
	)
}
