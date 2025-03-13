import { ItemData, ItemDataString } from '../../UIKit/CustomList/CustomListTypes'

export interface IInputData<DataType = any> {
	value: string
	data?: DataType
}

export class SelectTaskData {
	isCollective?: ItemData

	// ФИО
	fio?: ItemData
	// Полис
	policу?: ItemData
	// Дата рождения
	dataBt?: ItemDataString

	// Номер задачи - строчька
	number?: ItemData
	// Статус задачи - флажки
	status?: ItemData
	// Вид задачи - поиск по названию
	sort?: ItemData
	// Тип задачи - флажки
	type?: ItemData
	// Срочность
	urgency?: ItemData
	// Дата создания - дата с по
	createdAt?: ItemDataString
	// Дата контроля - дата с по
	controledAt?: ItemDataString
	//Канал
	channel?: ItemData
	// Автор - поиск по названию
	author?: ItemData
	//Группа автора
	authorGroup?: ItemData
	// Исполнитель - поиск по названию
	executor?: ItemData
	//Группа исполнителя
	executorGroup?: ItemData
	// Страхователь
	insurer?: ItemData
	// Форма согласования
	formApproval?: ItemData
	// Статус согласования
	statusApproval?: ItemData
	// Срок согласования
	termApproval?: ItemDataString

	constructor({
		isCollective,
		fio,
		policу,
		dataBt,
		number,
		status,
		sort,
		type,
		urgency,
		createdAt,
		controledAt,
		channel,
		author,
		authorGroup,
		executor,
		executorGroup,
		insurer,
		formApproval,
		statusApproval,
		termApproval,
	}: SelectTaskData) {
		this.isCollective = isCollective
		this.fio = fio
		this.policу = policу
		this.dataBt = dataBt
		this.number = number
		this.status = status
		this.sort = sort
		this.type = type
		this.urgency = urgency
		this.createdAt = createdAt
		this.controledAt = controledAt
		this.channel = channel
		this.author = author
		this.authorGroup = authorGroup
		this.executor = executor
		this.executorGroup = executorGroup
		this.insurer = insurer
		this.formApproval = formApproval
		this.statusApproval = statusApproval
		this.termApproval = termApproval
	}
}
