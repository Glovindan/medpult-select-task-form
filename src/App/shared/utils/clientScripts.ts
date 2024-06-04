import { FetchData, SortData } from '../../../UIKit/CustomList/CustomListTypes'
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

export default {
	getTasks,
}
