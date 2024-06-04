import React from 'react';
import CustomList from '../../../UIKit/CustomList/CustomList';
import { ListColumnData } from '../../../UIKit/CustomList/CustomListTypes';
import Scripts from '../../shared/utils/clientScripts';

interface SelectTaskListProps {

}

/** Фильтры формы отбра задач */
export default function SelectTaskList({ }: SelectTaskListProps) {
	/** Колонки списка */
	const columns = [
		new ListColumnData({ name: "Номер задачи", code: "number", fr: 1, isSortable: true }),
		new ListColumnData({ name: "Статус задачи", code: "status", fr: 1, isSortable: true }),
		new ListColumnData({ name: "тип задачи", code: "type", fr: 1 }),
		new ListColumnData({ name: "вид задачи", code: "sort", fr: 1 }),
		new ListColumnData({ name: "дата создания", code: "createdAt", fr: 1 }),
		new ListColumnData({ name: "Дата контроля", code: "controledAt", fr: 1 }),
		new ListColumnData({ name: "автор", code: "author", fr: 1 }),
		new ListColumnData({ name: "исполнитель", code: "executor", fr: 1 }),
		new ListColumnData({ name: "обращение", code: "request", fr: 1 }),
	]

	return (
		<div className="select-task-list">
			<CustomList columnsSettings={columns} getDataHandler={Scripts.getTasks} />
		</div>
	)
}