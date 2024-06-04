export interface IInputData<DataType = any> {
	value: string
	data?: DataType
}

export class SelectTaskData {
	// Номер задачи - строчька
	number?: string
	// Статус задачи - флажки
	status?: string
	// Тип задачи - флажки
	type?: string
	// Вид задачи - хрень какая-то
	sort?: string
	// Дата создания - дата с по
	createdAt?: string
	// Дата контроля - дата с по
	controledAt?: string
	// Автор - хрень какая-то
	author?: string
	// Исполнитель - хрень какая-то
	executor?: string
	// Обращение - ваще хз спросить надо
	request?: string
	// Застрахованный - ваще хз спросить надо
	insured?: string

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
		this.number = number ?? ''
		this.status = status ?? ''
		this.type = type ?? ''
		this.sort = sort ?? ''
		this.createdAt = createdAt ?? ''
		this.controledAt = controledAt ?? ''
		this.author = author ?? ''
		this.executor = executor ?? ''
		this.request = request ?? ''
		this.insured = insured ?? ''
	}
}
