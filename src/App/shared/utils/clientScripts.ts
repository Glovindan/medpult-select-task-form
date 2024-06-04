import { FetchData, SortData } from '../../../UIKit/CustomList/CustomListTypes'
import { ObjectItem } from '../../components/Filters/FiltersTypes'
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
	searchData?: any
): Promise<FetchData<SelectTaskData>> {
	const mockData = {
		number: 'TS00000001/23',
		status: 'В работе',
		type: 'Медицинское',
		sort: 'Запись к врачу',
		createdAt: '06.12.2023 12:22',
		controledAt: '06.12.2023 12:22',
		author: 'Юрасов Сергей Олегович',
		executor: 'Юрасов Сергей Олегович',
		request: 'RQ00000025/23',
	}
	return {
		data: Array(20)
			.fill(0)
			.map((data, index) => {
				return new SelectTaskData(mockData)
			}),
		hasMore: false,
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
