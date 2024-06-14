import React, { useEffect, useState } from 'react';
import FiltersWrapper from '../../../UIKit/Filters/FiltersWrapper/FiltersWrapper';
import FilterItemWrapper from '../../../UIKit/Filters/FilterItems/FilterItemWrapper/FilterItemWrapper';
import FilterItemString from '../../../UIKit/Filters/FilterItems/FilterItemString/FilterItemString';
import { selectTaskContext } from '../../stores/SelectTaskContext';
import { ObjectItem, IFilter, StringFilter } from '../../../UIKit/Filters/FiltersTypes';
import FilterItemCategory from '../../../UIKit/Filters/FilterItems/FilterItemCategory/FilterItemCategory';
import Scripts from '../../shared/utils/clientScripts';
import FilterItemDates from '../../../UIKit/Filters/FilterItems/FilterItemDates/FilterItemDates';
import FilterItemSearch from '../../../UIKit/Filters/FilterItems/FilterItemSearch/FilterItemSearch';

interface SelectTaskFiltersProps {

}

/** Фильтры формы отбра задач */
export default function SelectTaskFiltersForm({ }: SelectTaskFiltersProps) {
	const { data, setValue } = selectTaskContext.useContext();
	const filters = data.filters;

	/** Изменение значения конкретного фильтра */
	const changeFilterValue = (key: string, value: IFilter) => {
		const currentFilters = filters;
		currentFilters[key] = value;
		setValue("filters", currentFilters)
	}

	const changeValueConstructor = (key: string) => {
		return (value: IFilter) => changeFilterValue(key, value);
	}

	/** Статусы */
	const [statuses, setStatuses] = useState<ObjectItem[]>([]);
	/** Типы */
	const [types, setTypes] = useState<ObjectItem[]>([]);
	/** Виды */
	const [sorts, setSorts] = useState<ObjectItem[]>([]);

	/** Получение вариантов категорий */
	React.useLayoutEffect(() => {
		Scripts.getStatuses().then(items => setStatuses(items))
		Scripts.getTypes().then(items => setTypes(items))
		Scripts.getSorts().then(items => setSorts(items))
	}, [])

	/** Сброс фильтров */
	const resetFilters = () => {
		data.filters.reset();
		setValue("filters", data.filters)
	}

	/** Обработчик нажатия на кнопку поиска */
	const searchHandler = async () => {
		// Количество отобранных элементов
		const elementsCount = await Scripts.getTasksCount(data.filters);
		setValue("elementsCount", elementsCount)

		// Поиск
		data.onClickSearch()
	}

	return (
		<FiltersWrapper searchHandler={searchHandler} resetHandler={resetFilters}>
			<FilterItemString title={data.filters.number.fieldName} filterValue={data.filters.number} setFilterValue={changeValueConstructor(data.filters.number.fieldCode)} />
			<FilterItemCategory title={data.filters.status.fieldName} variants={statuses} filterValue={data.filters.status} setFilterValue={changeValueConstructor(data.filters.status.fieldCode)} />
			<FilterItemCategory title={data.filters.type.fieldName} variants={types} filterValue={data.filters.type} setFilterValue={changeValueConstructor(data.filters.type.fieldCode)} />
			<FilterItemCategory title={data.filters.sort.fieldName} variants={sorts} filterValue={data.filters.sort} setFilterValue={changeValueConstructor(data.filters.sort.fieldCode)} />
			<FilterItemDates title={data.filters.createdAt.fieldName} filterValue={data.filters.createdAt} setFilterValue={changeValueConstructor(data.filters.createdAt.fieldCode)} />
			<FilterItemDates title={data.filters.controledAt.fieldName} filterValue={data.filters.controledAt} setFilterValue={changeValueConstructor(data.filters.controledAt.fieldCode)} />
			<FilterItemSearch title={data.filters.author.fieldName} filterValue={data.filters.author} getDataHandler={Scripts.getUsers} setFilterValue={changeValueConstructor(data.filters.author.fieldCode)} />
			<FilterItemSearch title={data.filters.executor.fieldName} filterValue={data.filters.executor} getDataHandler={Scripts.getUsers} setFilterValue={changeValueConstructor(data.filters.executor.fieldCode)} />
			<FilterItemString title={data.filters.request.fieldName} filterValue={data.filters.request} setFilterValue={changeValueConstructor(data.filters.request.fieldCode)} />
			<FilterItemString title={data.filters.insured.fieldName} filterValue={data.filters.insured} setFilterValue={changeValueConstructor(data.filters.insured.fieldCode)} />
		</FiltersWrapper>
	)
}