import React, { useEffect, useState } from 'react';
import FilterItemWrapper from '../FilterItemWrapper/FilterItemWrapper';
import { FilterItemProps, ObjectItem, ListFilter } from '../../FiltersTypes';
import CustomInputSearch from '../../../CustomInputSearch/CustomInputSearch';
import FilterItemSearchElement from './FilterItemSearchElement/FilterItemSearchElement';

interface FilterItemSearchProps extends FilterItemProps<ListFilter> {
	/** Название фильтра */
	title: string
	/** Функция поиска элементов */
	getDataHandler: (query?: string) => Promise<ObjectItem[]>
}

/** Обертка элемента фильтров со строкой поиска */
export default function FilterItemSearch({ title, filterValue, setFilterValue, getDataHandler }: FilterItemSearchProps) {
	/** Добавление значения в фильтр */
	const addValue = (value: string, data?: string) => {
		const values = filterValue.values;
		if (Boolean(values.find(item => item.code === data))) return;

		values.push({ value: value, code: data ?? "" });
		setFilterValue(filterValue)
	}

	/** Счетчик выбранных значений */
	// Количество элементов
	const [selectedItemsCount, setSelectedItemsCount] = useState<number>(filterValue.values.length);
	// Изменение счетчика выбранных элементов
	React.useLayoutEffect(() => {
		setSelectedItemsCount(filterValue.values.length)
	}, [filterValue.values.length])
	// Надпись о количестве выбранных элементов
	const selectedItemsLabel = `Выбрано: ${selectedItemsCount}`

	/** Обработчик удаления элемента */
	const deleteHandler = (code: string) => {
		console.log(filterValue.values);
		filterValue.values = filterValue.values.filter(item => item.code !== code);
		setFilterValue(filterValue)
	}

	/** Получение данных без дубликатов */
	const getDataFiltered = async (query?: string): Promise<ObjectItem[]> => {
		const data = await getDataHandler(query);
		const dataFiltered = data.filter(value => !Boolean(filterValue.values.find(item => item.code === value.code)))

		return dataFiltered;
	}

	return (
		<FilterItemWrapper title={title}>
			<CustomInputSearch data={''} setValue={addValue} getDataHandler={getDataFiltered} isViewMode={false} value={selectedItemsLabel} />
			<div className="filter-item-search-variants">
				{filterValue.values.map(item => <FilterItemSearchElement name={item.value} deleteHandler={() => deleteHandler(item.code)} />)}
			</div>
		</FilterItemWrapper>
	)
}