import React, { useEffect, useState } from 'react';
import CustomList from '../../../UIKit/CustomList/CustomList';
import { ListColumnData } from '../../../UIKit/CustomList/CustomListTypes';
import Scripts from '../../shared/utils/clientScripts';
import { SelectTaskFilters, selectTaskContext } from '../../stores/SelectTaskContext';
import { SelectTaskData } from '../../shared/types';

interface SelectTaskListProps {
	/** Ширина списка */
	width: number;
}

/** Фильтры формы отбра задач */
export default function SelectTaskList({ width }: SelectTaskListProps) {
	const { data, setValue } = selectTaskContext.useContext();

	/** Установка обработчика нажатия на поиск */
	const setSearchHandler = (callback: () => void) => {
		console.log("setSearchHandler")
		setValue("onClickSearch", callback)
	}

	/** Обработчик нажатия на номер задачи */
	const onClickTaskNumber = (props) => {
		console.log(props);
	}

	/** Обработчик нажатия на номер задачи */
	const onClickRequest = (props) => {
		console.log(props);
	}

	/** Колонки списка */
	const columns = [
		new ListColumnData({ name: data.filters.number.fieldName, code: data.filters.number.fieldCode, fr: 1, isSortable: true, isLink: true, onClick: onClickTaskNumber }),
		new ListColumnData({ name: data.filters.status.fieldName, code: data.filters.status.fieldCode, fr: 1, isSortable: true }),
		new ListColumnData({ name: data.filters.type.fieldName, code: data.filters.type.fieldCode, fr: 1, isSortable: true }),
		new ListColumnData({ name: data.filters.sort.fieldName, code: data.filters.sort.fieldCode, fr: 1, isSortable: true }),
		new ListColumnData({ name: data.filters.createdAt.fieldName, code: data.filters.createdAt.fieldCode, fr: 1, isSortable: true }),
		new ListColumnData({ name: data.filters.controledAt.fieldName, code: data.filters.controledAt.fieldCode, fr: 1, isSortable: true }),
		new ListColumnData({ name: data.filters.author.fieldName, code: data.filters.author.fieldCode, fr: 1, isSortable: true }),
		new ListColumnData({ name: data.filters.executor.fieldName, code: data.filters.executor.fieldCode, fr: 1, isSortable: true }),
		new ListColumnData({ name: data.filters.request.fieldName, code: data.filters.request.fieldCode, fr: 1, isSortable: true, isLink: true, onClick: onClickRequest }),
	]

	return (
		<div className="select-task-list">
			<CustomList<SelectTaskFilters, SelectTaskData> setSearchHandler={setSearchHandler} searchData={data.filters} columnsSettings={columns} getDataHandler={Scripts.getTasks} height='70vh' listWidth={width} />
		</div>
	)
}