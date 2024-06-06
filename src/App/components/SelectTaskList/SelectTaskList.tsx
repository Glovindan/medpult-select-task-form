import React from 'react';
import CustomList from '../../../UIKit/CustomList/CustomList';
import { ListColumnData } from '../../../UIKit/CustomList/CustomListTypes';
import Scripts from '../../shared/utils/clientScripts';
import { SelectTaskFilters, selectTaskContext } from '../../stores/SelectTaskContext';

interface SelectTaskListProps {
	/** Ширина списка */
	width: number;
}

/** Фильтры формы отбра задач */
export default function SelectTaskList({ width }: SelectTaskListProps) {
	const [data, setValue] = selectTaskContext.useState()

	/** Колонки списка */
	const columns = [
		new ListColumnData({ name: "Номер задачи", code: data.filters.number.fieldCode, fr: 1, isSortable: true, isLink: true }),
		new ListColumnData({ name: "Статус задачи", code: data.filters.status.fieldCode, fr: 1, isSortable: true }),
		new ListColumnData({ name: "тип задачи", code: data.filters.type.fieldCode, fr: 1, isSortable: true }),
		new ListColumnData({ name: "вид задачи", code: data.filters.sort.fieldCode, fr: 1, isSortable: true }),
		new ListColumnData({ name: "дата создания", code: data.filters.createdAt.fieldCode, fr: 1, isSortable: true }),
		new ListColumnData({ name: "Дата контроля", code: data.filters.controledAt.fieldCode, fr: 1, isSortable: true }),
		new ListColumnData({ name: "автор", code: data.filters.author.fieldCode, fr: 1, isSortable: true }),
		new ListColumnData({ name: "исполнитель", code: data.filters.executor.fieldCode, fr: 1, isSortable: true }),
		new ListColumnData({ name: "обращение", code: data.filters.request.fieldCode, fr: 1, isSortable: true, isLink: true }),
	]

	return (
		<div className="select-task-list">
			<CustomList<SelectTaskFilters> searchData={data.filters} columnsSettings={columns} getDataHandler={Scripts.getTasks} height='70vh' listWidth={width} />
		</div>
	)
}