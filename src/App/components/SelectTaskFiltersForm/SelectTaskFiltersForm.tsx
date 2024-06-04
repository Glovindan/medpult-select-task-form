import React, { useEffect, useState } from 'react';
import FiltersWrapper from '../Filters/FiltersWrapper/FiltersWrapper';
import FilterItemWrapper from '../Filters/FilterItems/FilterItemWrapper/FilterItemWrapper';
import FilterItemString from '../Filters/FilterItems/FilterItemString/FilterItemString';
import { selectTaskContext } from '../../stores/SelectTaskContext';
import { ObjectItem, IFilter, StringFilter } from '../Filters/FiltersTypes';
import FilterItemCategory from '../Filters/FilterItems/FilterItemCategory/FilterItemCategory';
import Scripts from '../../shared/utils/clientScripts';
import FilterItemDates from '../Filters/FilterItems/FilterItemDates/FilterItemDates';

interface SelectTaskFiltersProps {

}

/** Фильтры формы отбра задач */
export default function SelectTaskFiltersForm({ }: SelectTaskFiltersProps) {
	const { data, setValue } = selectTaskContext.useContext();
	const filters = data.filters;

	useEffect(() => {
		console.log(data.filters)
	}, [data])

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
		setValue("filters", data.filters.reset())
	}

	return (
		<FiltersWrapper resetHandler={resetFilters}>
			<FilterItemString title='Номер задачи' filterValue={data.filters.number} setFilterValue={changeValueConstructor(data.filters.number.fieldCode)} />
			<FilterItemCategory title={'Статус задачи'} variants={statuses} filterValue={data.filters.status} setFilterValue={changeValueConstructor(data.filters.status.fieldCode)} />
			<FilterItemCategory title={'Тип задачи'} variants={types} filterValue={data.filters.type} setFilterValue={changeValueConstructor(data.filters.type.fieldCode)} />
			<FilterItemCategory title={'Вид задачи'} variants={sorts} filterValue={data.filters.sort} setFilterValue={changeValueConstructor(data.filters.sort.fieldCode)} />
			<FilterItemDates title={'Дата создания'} filterValue={data.filters.createdAt} setFilterValue={changeValueConstructor(data.filters.createdAt.fieldCode)} />
			<FilterItemDates title={'Дата контроля'} filterValue={data.filters.controledAt} setFilterValue={changeValueConstructor(data.filters.controledAt.fieldCode)} />
			<FilterItemWrapper title='Автор'>
				test
			</FilterItemWrapper>
			<FilterItemWrapper title='Исполнитель'>
				test
			</FilterItemWrapper>
			<FilterItemString title='Обращение' filterValue={data.filters.request} setFilterValue={changeValueConstructor(data.filters.request.fieldCode)} />
			<FilterItemString title='Застрахованный' filterValue={data.filters.insured} setFilterValue={changeValueConstructor(data.filters.insured.fieldCode)} />
		</FiltersWrapper>
	)
}