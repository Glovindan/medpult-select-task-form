import React, { useEffect, useState } from 'react';
import FilterItemWrapper from '../FilterItemWrapper/FilterItemWrapper';
import { FilterItemProps, ObjectItem, ListFilter } from '../../FiltersTypes';
import CustomInputSearch from '../../../../../UIKit/CustomInputSearch/CustomInputSearch';

interface FilterItemSearchProps extends FilterItemProps<ListFilter> {
	/** Название фильтра */
	title: string
	/** Функция поиска элементов */
	getDataHandler: (query?: string) => Promise<ObjectItem[]>
}

/** Обертка элемента фильтров со строкой поиска */
export default function FilterItemSearch({ title, filterValue, setFilterValue, getDataHandler }: FilterItemSearchProps) {
	const addValue = (value: string, data?: string) => {
		filterValue.values.push({ value: value, code: data ?? "" });
		setFilterValue(filterValue)
	}

	// Надпись в поле поиска
	const [selectedItemsCount, setSelectedItemsCount] = useState<number>(filterValue.values.length);
	useEffect(() => {
		setSelectedItemsCount(filterValue.values.length)
	}, [filterValue.values.length])
	const selectedItemsLabel = `Выбрано: ${selectedItemsCount}`

	return (
		<FilterItemWrapper title={title}>
			<CustomInputSearch data={''} setValue={addValue} getDataHandler={getDataHandler} isViewMode={false} value={selectedItemsLabel} />
		</FilterItemWrapper>
	)
}