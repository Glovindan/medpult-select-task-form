import React, { useEffect, useState } from 'react';
import FilterItemWrapper from '../FilterItemWrapper/FilterItemWrapper';
import { FilterItemProps, ObjectItem, DateFilter } from '../../FiltersTypes';
import CustomInputCheckbox from '../../../../../UIKit/CustomInputCheckbox/CustomInputCheckbox';
import CustomInputDate from '../../../../../UIKit/CustomInputDate/CustomInputDate'
import { InputDateType } from '../../../../../UIKit/CustomInputDate/CustomInputDateTypes'
import moment, { Moment } from 'moment';
import masks from '../../../../../UIKit/shared/utils/masks';

interface FilterItemDatesProps extends FilterItemProps<DateFilter> {
	/** Название фильтра */
	title: string
}

/** Обертка элемента фильтров для строчного поиска */
export default function FilterItemDates({ title, filterValue, setFilterValue }: FilterItemDatesProps) {
	/** Установить дату после */
	const setFromDate = (dateStr?: string) => {
		filterValue.valueFrom = dateStr;
		setFilterValue(filterValue);
	}

	/** Установить дату до */
	const setToDate = (dateStr?: string) => {
		filterValue.valueTo = dateStr;
		setFilterValue(filterValue);
	}

	return (
		<FilterItemWrapper title={title}>
			<div className="filter-item-variants">
				<CustomInputDate type={InputDateType.date} value={masks.applyDateMask(filterValue.valueFrom ?? "")} setValue={setFromDate} />
				<CustomInputDate type={InputDateType.date} value={masks.applyDateMask(filterValue.valueTo ?? "")} setValue={setToDate} />
			</div>
		</FilterItemWrapper>
	)
}