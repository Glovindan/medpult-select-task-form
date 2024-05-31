/** Интерфейс фильтров */
export interface IFilter {
	/** Сброс фильтра */
	reset(): void
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

	constructor() {
		this.reset()
	}

	reset(): void {
		this.value = ''
		this.operator = StringFilterOperator.like
	}
}

/** Значение элемента списка */
export class FilterValue {
	/** Значение */
	value: string
	/** Код / Идентификатор */
	code: string
}

/** Фильтр по списку */
export class ListFilter implements IFilter {
	/** Значения */
	values: FilterValue[]

	constructor() {
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

	constructor() {
		this.reset()
	}

	reset(): void {
		this.valueFrom = undefined
		this.valueTo = undefined
	}
}

/** Базовый класс для фильтров */
export class FiltersData {
	/** Сброс всех фильтров */
	reset(): void {
		const keys = Object.getOwnPropertyNames(this)
		for (const key of keys) {
			if (this[key].reset) this[key].reset()
		}
	}
}
