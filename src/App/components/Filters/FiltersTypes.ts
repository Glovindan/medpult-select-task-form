/** Интерфейс фильтров */
export interface IFilter {
	/** Сброс фильтра */
	reset(): void
	/** Код поля */
	fieldCode: string
}

/** Операторы фильтров по строке */
export enum StringFilterOperator {
	/** Равно */
	eq = 'eq',
	/** Неравно */
	neq = 'neq',
	/** Содержит */
	like = 'like',
}

/** Фильтр по строке */
export class StringFilter implements IFilter {
	/** Значение */
	value: string
	/** Оператор (по умолчанию Содержит) */
	operator: StringFilterOperator
	fieldCode: string

	constructor(code: string, value?: string) {
		this.reset()
		this.fieldCode = code
		if (value) this.value = value
	}

	reset(): void {
		this.value = ''
		this.operator = StringFilterOperator.like
	}
}

/** Значение элемента списка */
export class ObjectItem {
	/** Значение */
	value: string
	/** Код / Идентификатор */
	code: string

	constructor({ value, code }: { value?: string; code?: string }) {
		this.value = value ?? ''
		this.code = code ?? ''
	}
}

/** Фильтр по списку */
export class ListFilter implements IFilter {
	/** Значения */
	values: ObjectItem[]
	fieldCode: string

	constructor(code: string, value?: string) {
		this.reset()
		this.fieldCode = code
		this.reset()
	}

	reset(): void {
		this.values = []
	}
}

/** Фильтр по датам */
export class DateFilter implements IFilter {
	/** Дата от */
	valueFrom?: Date
	/** Дата до */
	valueTo?: Date
	fieldCode: string

	constructor(code: string, value?: string) {
		this.reset()
		this.fieldCode = code
	}

	reset(): void {
		this.valueFrom = undefined
		this.valueTo = undefined
	}
}

/** Базовый класс для фильтров */
export interface IFiltersData {
	/** Сброс всех фильтров */
	reset(): void
}

export interface FilterItemProps<FilterType> {
	/** Значение фильтра */
	filterValue: FilterType
	/** Изменение значения фильтра */
	setFilterValue: (value: FilterType, ...args: any) => any
}
