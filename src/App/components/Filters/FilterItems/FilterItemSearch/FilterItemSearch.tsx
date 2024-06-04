import React, { useState } from 'react';
import FilterItemWrapper from '../FilterItemWrapper/FilterItemWrapper';
import { FilterItemProps, ObjectItem, ListFilter } from '../../FiltersTypes';
import CustomInputSearch from '../../../../../UIKit/CustomInputSearch/CustomInputSearch';

interface FilterItemSearchProps extends FilterItemProps<ListFilter> {
	/** Название фильтра */
	title: string
	/** Функция поиска элементов */
	getDataHandler: (query: string) => Promise<ObjectItem[]>
}

/** Обертка элемента фильтров со строкой поиска */
export default function FilterItemSearch({ title, filterValue, setFilterValue, getDataHandler }: FilterItemSearchProps) {

	const addValue = (value: string, code: string) => {
		throw new Error('Function not implemented.');
	}

	// Надпись в поле поиска
	const [selectedItemsCount, setSelectedItemsCount] = useState<number>(filterValue.values.length);
	const selelctedItemsLabel = `Выбрано: ${selectedItemsCount}`

	return (
		<FilterItemWrapper title={title}>
			<CustomInputSearch code={''} setValue={addValue} getDataHandler={getDataHandler} isViewMode={false} value={selelctedItemsLabel} />
		</FilterItemWrapper>
	)
}