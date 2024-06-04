import React, { useEffect, useState } from 'react'
import FiltersWrapper from '../Filters/FiltersWrapper/FiltersWrapper';
import FilterItemWrapper from '../Filters/FilterItems/FilterItemWrapper/FilterItemWrapper';
import FilterItemString from '../Filters/FilterItems/FilterItemString/FilterItemString';
import { selectTaskContext } from '../../stores/SelectTaskContext';
import { FilterValue, IFilter, ListFilter, StringFilter } from '../Filters/FiltersTypes';
import CustomInputCheckbox from '../../../UIKit/CustomInputCheckbox/CustomInputCheckbox';
import FilterItemCategory from '../Filters/FilterItems/FilterItemCategory/FilterItemCategory';

interface SelectTaskFiltersProps {

}

/** Фильтры формы отбра задач */
export default function SelectTaskFiltersForm({ }: SelectTaskFiltersProps) {
	const { data, setValue } = selectTaskContext.useContext();
	const filters = data.filters;
	useEffect(() => {
		changeValueConstructor("number")(new StringFilter("afsfs"))
	}, [])

	useEffect(() => {
		console.log(data.filters.status)
		// changeFilterValue("number")("afsfs")
	}, [data])

	/** Изменение значения конкретного фильтра */
	const changeFilterValue = (key: string, value: IFilter) => {
		const currentFilters = JSON.parse(JSON.stringify(filters));
		currentFilters[key] = value;
		setValue("filters", currentFilters)
	}

	const changeValueConstructor = (key: string) => {
		return (value: IFilter) => changeFilterValue(key, value);
	}

	const statuses = [
		new FilterValue({ code: "test", value: "В очереди" }),
		new FilterValue({ code: "test1", value: "В работе" }),
		new FilterValue({ code: "test2", value: "Контроль" }),
		new FilterValue({ code: "test3", value: "Отложено" }),
		new FilterValue({ code: "test4", value: "Выполнено" }),
	]

	return (
		<FiltersWrapper>
			<FilterItemString title='Номер задачи' filterValue={data.filters.number} setFilterValue={changeValueConstructor("number")} />
			<FilterItemCategory title={'Статус задачи'} variants={statuses} filterValue={data.filters.status} setFilterValue={changeValueConstructor("status")} />
			<FilterItemWrapper title='Тип задачи'>
				test
			</FilterItemWrapper>
			<FilterItemWrapper title='Вид задачи'>
				test
			</FilterItemWrapper>
			<FilterItemWrapper title='Дата создания'>
				test
			</FilterItemWrapper>
			<FilterItemWrapper title='Дата контроля'>
				test
			</FilterItemWrapper>
			<FilterItemWrapper title='Автор'>
				test
			</FilterItemWrapper>
			<FilterItemWrapper title='Исполнитель'>
				test
			</FilterItemWrapper>
			<FilterItemWrapper title='Обращение'>
				test
			</FilterItemWrapper>
			<FilterItemWrapper title='Застрахованный'>
				test
			</FilterItemWrapper>
		</FiltersWrapper>
	)
}