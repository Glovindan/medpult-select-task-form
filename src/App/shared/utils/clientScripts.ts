import {
	FetchData,
	ItemData,
	ItemDataString,
	SortData,
} from '../../../UIKit/CustomList/CustomListTypes'
import { ObjectItem } from '../../../UIKit/Filters/FiltersTypes'
import { SelectTaskFilters } from '../../stores/SelectTaskContext'
import { SelectTaskData } from '../types'

/** Заглушка ожидания ответа сервера */
function randomDelay() {
	const delay = Math.random() * 1000
	return new Promise((resolve) => {
		setTimeout(resolve, delay)
	})
}

/** Получение списка задач */
async function getTasks(
	page: number,
	sortData?: SortData,
	searchData?: SelectTaskFilters
): Promise<FetchData<SelectTaskData>> {
	await randomDelay()

	console.log({
		page,
		sortData,
		searchData,
	})

	const mockData = {
		number: new ItemData({ value: 'TS00000001/23', info: 'test' }),
		status: new ItemData({ value: 'В работе', info: 'test' }),
		type: new ItemData({ value: 'Медицинское', info: 'test' }),
		sort: new ItemData({ value: 'Запись к врачу', info: 'test' }),
		createdAt: new ItemDataString('06.12.2023 12:22'),
		controledAt: new ItemDataString('06.12.2023 12:22'),
		author: new ItemData({ value: 'Юрасов Сергей Олегович', info: 'test' }),
		executor: new ItemData({ value: 'Юрасов Сергей Олегович', info: 'test' }),
		request: new ItemData({ value: 'RQ00000025/23', info: 'test' }),
	}
	return {
		items: Array(20)
			.fill(0)
			.map((data, index) => {
				return {
					id: String(index),
					data: new SelectTaskData(mockData),
				}
			}),
		hasMore: true,
	}
}

/** Получение статусов задач */
async function getStatuses(): Promise<ObjectItem[]> {
	await randomDelay()

	/** Статусы */
	const statuses: ObjectItem[] = [
		new ObjectItem({ code: 'test', value: 'В очереди' }),
		new ObjectItem({ code: 'test1', value: 'В работе' }),
		new ObjectItem({ code: 'test2', value: 'Контроль' }),
		new ObjectItem({ code: 'test3', value: 'Отложено' }),
		new ObjectItem({ code: 'test4', value: 'Выполнено' }),
	]

	return statuses
}

/** Получение типов задач */
async function getTypes(): Promise<ObjectItem[]> {
	await randomDelay()

	/** Статусы */
	const types: ObjectItem[] = [
		new ObjectItem({ code: 'test', value: 'Информационное' }),
		new ObjectItem({ code: 'test1', value: 'Негативное' }),
		new ObjectItem({ code: 'test2', value: 'Медицинское' }),
		new ObjectItem({ code: 'test3', value: 'Администрирование' }),
		new ObjectItem({ code: 'test4', value: 'Прочее' }),
	]

	return types
}

/** Получение видов задач */
async function getSorts(): Promise<ObjectItem[]> {
	await randomDelay()

	/** Статусы */
	const sorts: ObjectItem[] = [
		new ObjectItem({ code: 'test', value: 'Согласование услуг' }),
		new ObjectItem({ code: 'test1', value: 'Запись к врачу' }),
		new ObjectItem({ code: 'test2', value: 'Помощь на дому' }),
		new ObjectItem({ code: 'test3', value: 'Скорая медицинская помощь' }),
		new ObjectItem({ code: 'test4', value: 'Госпитализация ' }),
	]

	return sorts
}

export default {
	getTasks,
	getStatuses,
	getTypes,
	getSorts,
}
