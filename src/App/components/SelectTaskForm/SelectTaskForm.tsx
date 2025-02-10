import React, { useEffect, useRef, useState } from 'react'
import {
	selectTaskContext,
	SelectTaskData,
	SelectTaskFilters,
} from '../../stores/SelectTaskContext'
import Header from '../Header/Header'
import SelectTaskFiltersForm from '../SelectTaskFiltersForm/SelectTaskFiltersForm'
import SelectTaskList from '../SelectTaskList/SelectTaskList'
import { getDataFromDraft } from '../../shared/utils/utils'
import Loader from '../../../UIKit/Loader/Loader'
import Scripts from '../../shared/utils/clientScripts'
import {
	DateFilter,
	StringFilter,
	ListFilter,
	AppFilter,
} from '../../../UIKit/Filters/FiltersTypes'

/** Форма отбора задач */
export default function SelectTaskForm() {
	const [data, setValue] = selectTaskContext.useState()
	const contentWrapperRef = useRef<HTMLDivElement>(null)

	// Инициализация с черновиком
	const initializeWithDraft = (filtersData: SelectTaskData) => {
		try {
			const draftData: SelectTaskData | undefined = getDataFromDraft()
			if (draftData) {
				filtersData.filters.number = new StringFilter(
					'number',
					'номер задачи',
					draftData.filters.number?.value
				)
				filtersData.filters.status = new ListFilter(
					'status',
					'статус задачи',
					draftData.filters.status?.values
				)
				filtersData.filters.type = new ListFilter(
					'type',
					'тип задачи',
					draftData.filters.type?.values
				)
				filtersData.filters.sort = new ListFilter(
					'sort',
					'вид задачи',
					draftData.filters.sort?.values
				)
				filtersData.filters.createdAt = new DateFilter('createdAt', 'дата создания', {
					valueFrom: draftData.filters.createdAt?.valueFrom,
					valueTo: draftData.filters.createdAt?.valueTo,
				})
				filtersData.filters.controledAt = new DateFilter('controledAt', 'дата контроля', {
					valueFrom: draftData.filters.controledAt?.valueFrom,
					valueTo: draftData.filters.controledAt?.valueTo,
				})
				filtersData.filters.author = new ListFilter(
					'author',
					'автор',
					draftData.filters.author?.values
				)
				filtersData.filters.authorGroup = new ListFilter(
					'authorGroup',
					'группа автора',
					draftData.filters.authorGroup?.values
				)
				filtersData.filters.executor = new ListFilter(
					'executor',
					'исполнитель',
					draftData.filters.executor?.values
				)
				filtersData.filters.executorGroup = new ListFilter(
					'executorGroup',
					'группа исполнителя',
					draftData.filters.executorGroup?.values
				)
				filtersData.filters.request = new AppFilter(
					'request',
					'обращение',
					draftData.filters.request?.value
				)
				filtersData.filters.insured = new StringFilter(
					'insured',
					'застрахованный',
					draftData.filters.insured?.value
				)
				filtersData.filters.insurer = new StringFilter(
					'insurer',
					'страхователь',
					draftData.filters.insurer?.value
				)

				filtersData.filterStates = draftData.filterStates
			}
		} catch (e) {
			throw new Error('Ошибка получения данных из черновика: ' + e)
		}
	}

	const [isInitializing, setIsInitializing] = useState<boolean>(true)

	// Подгрузка данных
	useEffect(() => {
		Scripts.OnInit().then(() => {
			// Данные формы из черновика
			let filtersData: SelectTaskData = new SelectTaskData()

			initializeWithDraft(filtersData)

			// Установка фильтров
			setValue('filters', filtersData.filters)
			// Установка состояния оберток фильтров
			setValue('filterStates', filtersData.filterStates)

			setIsInitializing(false)
		})
	}, [])

	useEffect(() => {
		console.log(data)
	}, [data])

	const [isShowFilters, setIsShowFilters] = useState<boolean>(true)
	const toggleShowFilters = () => setIsShowFilters(!isShowFilters)

	// Ширина списка
	const [listWidth, setListWidth] = useState<number>(0)

	// Назначение обработчиков событий
	useEffect(() => {
		handleResizeWrapper()
		window.addEventListener('resize', handleResizeWrapper)

		return () => {
			window.removeEventListener('resize', handleResizeWrapper)
		}
	}, [])

	// Обработчик изменения размера
	const handleResizeWrapper = () => {
		const width = contentWrapperRef.current?.getBoundingClientRect().width ?? 0
		setListWidth(width)
	}

	return (
		<selectTaskContext.Provider value={{ data, setValue }}>
			<div className="select-task-form">
				{isInitializing && (
					<div className="select-task-form__loader">
						<Loader />
					</div>
				)}
				{!isInitializing && (
					<>
						<div className="select-task-form__header">
							<Header
								clickFilterHandler={toggleShowFilters}
								elementsCount={data.elementsCount}
								title="Форма отбора задач"
							/>
						</div>
						<div className="select-task-form__content" ref={contentWrapperRef}>
							<div
								className={`select-task-form__filters${
									!isShowFilters ? ' select-task-form__filters_hidden' : ''
								}`}
							>
								<SelectTaskFiltersForm />
							</div>
							<div className="select-task-form__list">
								<div>
									<SelectTaskList width={listWidth} />
								</div>
							</div>
						</div>
					</>
				)}
			</div>
		</selectTaskContext.Provider>
	)
}
