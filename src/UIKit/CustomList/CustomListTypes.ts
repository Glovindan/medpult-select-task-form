/** Атрибуты функции получения разметки деталей строки динамического списка */
export interface getDetailsLayoutAttributes {
	/** Сокращенные данные строки */
	rowData: any
	/** Обработчик нажатия на строку */
	onClickRowHandler: any
	/** Перезагрузка списка */
	reloadData: () => void
}

/** Данные сортировки */
export class SortData {
	code: string
	isAscending: boolean

	constructor({ code, isAscending }: { code?: string; isAscending?: boolean }) {
		this.code = code ?? ''
		this.isAscending = isAscending ?? true
	}
}

/** Данные столбца таблицы */
export class ListColumnData {
	/** Коэффициент соотношения ширины столбца */
	fr: number
	/** Можно ли по этому столбцу сортировать */
	isSortable: boolean
	/** Хранит ли по столбец ссылки */
	isLink: boolean
	/** Название столбца */
	name: string
	/** Код значения */
	code: string
	/** Обработчик нажатия */
	onClick?: (props: any) => any

	constructor({
		name,
		code,
		fr,
		isSortable,
		isLink,
		onClick,
	}: {
		name: string
		code: string
		fr?: number
		isSortable?: boolean
		isLink?: boolean
		onClick?: (props: any) => any
	}) {
		this.fr = fr ?? 1
		this.isSortable = isSortable ?? false
		this.isLink = isLink ?? false

		if (onClick) this.onClick = onClick

		this.name = name
		this.code = code
	}
}

/** Ответ запроса данных с сервера */
export interface FetchData {
	data: any
	hasMore: boolean
}
