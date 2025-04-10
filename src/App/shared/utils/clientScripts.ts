import {
	FetchData,
	ItemData,
	ItemDataString,
	SortData,
} from '../../../UIKit/CustomList/CustomListTypes'
import { ObjectItem } from '../../../UIKit/Filters/FiltersTypes'
import { FetchInputData } from '../../../UIKit/shared/types/types'
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
		isCollective: new ItemData({ value: 'collective' }),
		fio: new ItemData({ value: 'Иванов Иван Иванович', info: 'test' }),
		policy: new ItemData({ value: '008WS0000000000/1', info: 'test' }),
		dataBt: new ItemDataString('01.01.1990'),
		number: new ItemData({ value: 'TS00000001/23', info: 'test' }),
		status: new ItemData({ value: 'В работе', info: 'test' }),
		sort: new ItemData({ value: 'Запись к врачу', info: 'test' }),
		type: new ItemData({ value: 'Медицинское', info: 'test' }),
		urgency: new ItemData({ value: 'Экстренно', info: 'test' }),
		createdAt: new ItemDataString('06.12.2023'),
		controledAt: new ItemDataString('06.12.2023'),
		servicesApproved: new ItemData({ value: 'Рентген руки' }),
		channel: new ItemData({ value: 'Телефон', info: 'test' }),
		author: new ItemData({ value: 'Юрасов Сергей Олегович', info: 'test' }),
		authorGroup: new ItemData({ value: 'Врачи консультанты МедКЦ (2 линия)', info: 'test' }),
		executor: new ItemData({ value: 'Юрасов Сергей Олегович', info: 'test' }),
		executorGroup: new ItemData({ value: 'Врачи консультанты МедКЦ (2 линия)', info: 'test' }),
		insurer: new ItemData({ value: 'Петров Петр Петрович', info: 'test' }),
		formApproval: new ItemData({ value: 'ГП на бланке', info: 'test' }),
		statusApproval: new ItemData({ value: 'Выпущено', info: 'test' }),
		termApproval: new ItemDataString('06.12.2023-07.12.2023'),
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

/** Получение количества задач по фильтрам */
async function getTasksCount(searchData?: SelectTaskFilters): Promise<number> {
	return 0
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
		new ObjectItem({ code: 'test5', value: 'Изменение записи ' }),
		new ObjectItem({ code: 'test6', value: 'Информация о страховом событии ' }),
		new ObjectItem({ code: 'test7', value: 'Консультация по ранее оформленному договору ' }),
	]

	return sorts
}
/** Получение срочности задач */
async function getUrgency(): Promise<ObjectItem[]> {
	await randomDelay()

	const urgency: ObjectItem[] = [
		new ObjectItem({ code: 'test', value: 'Экстренно' }),
		new ObjectItem({ code: 'test1', value: 'Планово' }),
	]

	return urgency
}

/** Получение пользователей */
async function getUsers(): Promise<ObjectItem[]> {
	await randomDelay()

	const authors: ObjectItem[] = [
		new ObjectItem({ code: 'test', value: 'Иванов Иван Иванович' }),
		new ObjectItem({ code: 'test1', value: 'Петров Петр Петрович' }),
		new ObjectItem({ code: 'test2', value: 'Сидоров Сидр Сидрович' }),
		new ObjectItem({ code: 'test3', value: 'Васильев Василий Васильевич' }),
		new ObjectItem({ code: 'test4', value: 'Иванов Олег Михайлович' }),
		new ObjectItem({ code: 'test5', value: 'Петрова Ольга Ивановна' }),
	]

	return authors
}

/** Получение групп */
async function getUserGroups(): Promise<ObjectItem[]> {
	await randomDelay()

	const authors: ObjectItem[] = [
		new ObjectItem({ code: 'test', value: 'Группа записи' }),
		new ObjectItem({ code: 'test1', value: 'Врачи кураторы МедКЦ (3 линия)' }),
		new ObjectItem({ code: 'test2', value: 'Операторы (дев)' }),
		new ObjectItem({ code: 'test3', value: 'Врачи кураторы МедКЦ (2 линия)' }),
		new ObjectItem({ code: 'test4', value: 'Супервайзеры (дев)' }),
		new ObjectItem({ code: 'test5', value: 'Экперты по претензиям (4 линия)' }),
	]

	return authors
}
/** Получение каналов */
async function getChannels(): Promise<ObjectItem[]> {
	await randomDelay()

	const channels: ObjectItem[] = [
		new ObjectItem({ code: 'test', value: 'Телефон' }),
		new ObjectItem({ code: 'test1', value: 'Email (103@sberins.ru)' }),
		new ObjectItem({ code: 'test2', value: 'Email (911@sberins.ru)' }),
		new ObjectItem({ code: 'test3', value: 'Email (dms.kurators@sberins.ru)' }),
		new ObjectItem({ code: 'test4', value: 'СМС' }),
		new ObjectItem({ code: 'test5', value: 'Ручной ввод' }),
	]

	return channels
}
/** Получение формы согласования */
async function getFormApproval(): Promise<ObjectItem[]> {
	await randomDelay()

	const forms: ObjectItem[] = [
		new ObjectItem({ code: 'test', value: 'Устное' }),
		new ObjectItem({ code: 'test1', value: 'Email' }),
		new ObjectItem({ code: 'test2', value: 'ГП на бланке' }),
	]

	return forms
}
/** Получение статусов согласования */
async function getStatusApproval(): Promise<ObjectItem[]> {
	await randomDelay()

	const status: ObjectItem[] = [
		new ObjectItem({ code: 'test', value: 'В оформлении' }),
		new ObjectItem({ code: 'test1', value: 'Выпущено' }),
		new ObjectItem({ code: 'test2', value: 'Выпущено (отправлено)' }),
		new ObjectItem({ code: 'test3', value: 'Отозвано' }),
	]

	return status
}

/** Получение id обращения по id задачи */
async function getRequestIdByTaskId(taskId: string): Promise<string> {
	return 'test'
}

/** Получение ссылки для перехода на страницу обращения */
async function getRequestLink(): Promise<string> {
	return '#test'
}

/** Уровни доступа */
enum AccessLevel {
	/** Нет доступа, даже не видим */
	noAccess = 0,
	/** Только видим, не можем писать или менять */
	readOnly = 1,
	/** Видим, читаем и можем писать или нажимать на кнопку/ссылку */
	writeRead = 2,
}

/** Настройки доступа формы отбора задач */
interface ISelectTaskAccessSettings {
	searchButton: AccessLevel
	appendResponsible: AccessLevel
}

/** Получить настройки доступа формы отбора задач */
function getSelectTaskAccessSettings(): ISelectTaskAccessSettings {
	return {
		'searchButton': 2,
		'appendResponsible': 2,
	}
}

/** Получить ссылку формы отбора обращений */
function getSelectRequestLink(): string {
	return '#selectRequestTest'
}

/** Получить ссылку формы отбора застрахованных */
function getSelectInsuredLink(): string {
	return '#selectRequestTest'
}
async function OnInit(): Promise<void> {
	await randomDelay()
}

export default {
	getTasks,
	getTasksCount,
	getStatuses,
	getTypes,
	getSorts,
	getUrgency,
	getUsers,
	getUserGroups,
	getChannels,
	getFormApproval,
	getStatusApproval,

	getRequestIdByTaskId,
	getRequestLink,
	getSelectTaskAccessSettings,

	getSelectRequestLink,
	getSelectInsuredLink,
	OnInit,
}
