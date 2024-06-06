import { ItemData, ItemDataString } from '../../UIKit/CustomList/CustomListTypes'

export interface IInputData<DataType = any> {
	value: string
	data?: DataType
}

export class SelectTaskData {
	// Номер задачи - строчька
	number?: ItemData
	// Статус задачи - флажки
	status?: ItemData
	// Тип задачи - флажки
	type?: ItemData
	// Вид задачи - хрень какая-то
	sort?: ItemData
	// Дата создания - дата с по
	createdAt?: ItemDataString
	// Дата контроля - дата с по
	controledAt?: ItemDataString
	// Автор - хрень какая-то
	author?: ItemData
	// Исполнитель - хрень какая-то
	executor?: ItemData
	// Обращение - ваще хз спросить надо
	request?: ItemData
	// Застрахованный - ваще хз спросить надо
	insured?: ItemData

	constructor({
		number,
		status,
		type,
		sort,
		createdAt,
		controledAt,
		author,
		executor,
		request,
		insured,
	}: SelectTaskData) {
		this.number = number
		this.status = status
		this.type = type
		this.sort = sort
		this.createdAt = createdAt
		this.controledAt = controledAt
		this.author = author
		this.executor = executor
		this.request = request
		this.insured = insured
	}
}
