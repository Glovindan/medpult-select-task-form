import React, { useEffect, useState } from 'react'
import CustomList from '../../../UIKit/CustomList/CustomList'
import { ItemData, ListColumnData } from '../../../UIKit/CustomList/CustomListTypes'
import Scripts from '../../shared/utils/clientScripts'
import { SelectTaskFilters, selectTaskContext } from '../../stores/SelectTaskContext'
import { SelectTaskData } from '../../shared/types'
import utils from '../../shared/utils/utils'
import { icon } from '../../shared/iconsCol'
import { localStorageDraftKey } from '../../shared/utils/constants'

interface SelectTaskListProps {
	/** Ширина списка */
	width: number
}

/** Фильтры формы отбра задач */
export default function SelectTaskList({ width }: SelectTaskListProps) {
	const { data, setValue } = selectTaskContext.useContext()

	useEffect(() => {
		data.onClickSearch()
	}, [data.onClickSearch])

	/** Установка обработчика нажатия на поиск */
	const setSearchHandler = (callback: () => void) => {
		console.log('setSearchHandler')
		setValue('onClickSearch', callback)
	}

	/** Обработчик нажатия на номер задачи */
	const onClickTaskNumber = async (props: ItemData) => {
		const taskId = props.info
		if (!taskId) return
		// Установка обращения
		const requestId = await Scripts.getRequestIdByTaskId(taskId)
		utils.setRequest(requestId)

		localStorage.setItem('taskId', taskId)
		localStorage.setItem(localStorageDraftKey, JSON.stringify(data))

		// Переход
		const link = await Scripts.getRequestLink()
		// utils.redirectSPA(link)

		const redirectUrl = new URL(window.location.origin + '/' + link)
		if (requestId) redirectUrl.searchParams.set('request_id', requestId)
		if (taskId) redirectUrl.searchParams.set('task_id', taskId)
		utils.redirectSPA(redirectUrl.toString())
	}

	/** Обработчик нажатия на номер обращения */
	const onClickRequest = async (props: ItemData) => {
		const requestId = props.info
		if (!requestId) return
		// Установка обращения
		utils.setRequest(requestId)

		// Переход
		const link = await Scripts.getRequestLink()
		// utils.redirectSPA(link)

		const redirectUrl = new URL(window.location.origin + '/' + link)
		if (requestId) redirectUrl.searchParams.set('request_id', requestId)
		utils.redirectSPA(redirectUrl.toString())
	}

	// Вычислить количество отобранных элементов
	useEffect(() => {
		Scripts.getTasksCount(data.filters).then((count) => setValue('elementsCount', count))
	}, [])

	/** Доступ к поиску */
	const searchAccess = Scripts.getSelectTaskAccessSettings().searchButton == 2

	/** Колонки списка */
	const columns = [
		// Иконка - коллективное или индвидуальное
		new ListColumnData({
			name: data.filters.isCollective.fieldName,
			code: data.filters.isCollective.fieldCode,
			fr: 36,
			isIcon: true,
		}),
		new ListColumnData({
			name: data.filters.fio.fieldName,
			code: data.filters.fio.fieldCode,
			fr: 240,
			isSortable: searchAccess,
		}),
		new ListColumnData({
			name: data.filters.policy.fieldName,
			code: data.filters.policy.fieldCode,
			fr: 180,
			isSortable: searchAccess,
		}),
		new ListColumnData({
			name: 'ДР',
			code: data.filters.dataBt.fieldCode,
			fr: 108,
			isSortable: searchAccess,
		}),

		new ListColumnData({
			name: 'Номер',
			code: data.filters.number.fieldCode,
			fr: 108,
			isSortable: searchAccess,
			isLink: true,
			onClick: onClickTaskNumber,
		}),
		new ListColumnData({
			name: 'Статус',
			code: data.filters.status.fieldCode,
			fr: 96,
			isSortable: searchAccess,
		}),
		new ListColumnData({
			name: 'Вид',
			code: data.filters.sort.fieldCode,
			fr: 114,
			isSortable: searchAccess,
		}),
		new ListColumnData({
			name: 'Тип',
			code: data.filters.type.fieldCode,
			fr: 114,
			isSortable: searchAccess,
		}),
		new ListColumnData({
			name: 'Срочн.',
			code: data.filters.urgency.fieldCode,
			fr: 96,
			isSortable: searchAccess,
		}),
		new ListColumnData({
			name: 'Создание',
			code: data.filters.createdAt.fieldCode,
			fr: 114,
			isSortable: searchAccess,
		}),
		new ListColumnData({
			name: 'Контроль',
			code: data.filters.controledAt.fieldCode,
			fr: 114,
			isSortable: searchAccess,
		}),
		new ListColumnData({
			name: data.filters.channel.fieldName,
			code: data.filters.channel.fieldCode,
			fr: 132,
			isSortable: searchAccess,
		}),
		new ListColumnData({
			name: data.filters.author.fieldName,
			code: data.filters.author.fieldCode,
			fr: 240,
			isSortable: searchAccess,
		}),
		new ListColumnData({
			name: data.filters.authorGroup.fieldName,
			code: data.filters.authorGroup.fieldCode,
			fr: 240,
			isSortable: searchAccess,
		}),
		new ListColumnData({
			name: data.filters.executor.fieldName,
			code: data.filters.executor.fieldCode,
			fr: 240,
			isSortable: searchAccess,
		}),
		new ListColumnData({
			name: data.filters.executorGroup.fieldName,
			code: data.filters.executorGroup.fieldCode,
			fr: 240,
			isSortable: searchAccess,
		}),
		new ListColumnData({
			name: data.filters.insurer.fieldName,
			code: data.filters.insurer.fieldCode,
			fr: 240,
			isSortable: searchAccess,
		}),
		new ListColumnData({
			name: data.filters.formApproval.fieldName,
			code: data.filters.formApproval.fieldCode,
			fr: 200,
			isSortable: searchAccess,
		}),
		new ListColumnData({
			name: data.filters.statusApproval.fieldName,
			code: data.filters.statusApproval.fieldCode,
			fr: 200,
			isSortable: searchAccess,
		}),
		new ListColumnData({
			name: data.filters.termApproval.fieldName,
			code: data.filters.termApproval.fieldCode,
			fr: 190,
			isSortable: searchAccess,
		}),
	]

	return (
		<div className="select-task-list">
			<CustomList<SelectTaskFilters, SelectTaskData>
				setSearchHandler={setSearchHandler}
				searchData={data.filters}
				columnsSettings={columns}
				getDataHandler={Scripts.getTasks}
				height="70vh"
				listWidth={width}
			/>
		</div>
	)
}
