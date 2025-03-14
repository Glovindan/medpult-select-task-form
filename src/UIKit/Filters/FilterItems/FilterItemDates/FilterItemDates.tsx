import React, { useState } from 'react'
import FilterItemWrapper from '../FilterItemWrapper/FilterItemWrapper'
import { FilterItemProps, DateFilter, FilterItemWrapperProps } from '../../FiltersTypes'
import CustomInputDate from '../../../CustomInputDate/CustomInputDate'
import { InputDateType } from '../../../CustomInputDate/CustomInputDateTypes'
import masks from '../../../shared/utils/masks'
import { showError } from '../../../../App/shared/utils/utils'

interface FilterItemDatesProps extends FilterItemProps<DateFilter>, FilterItemWrapperProps {}

/** Обертка элемента фильтров для строчного поиска */
export default function FilterItemDates(props: FilterItemDatesProps) {
	const { filterValue, setFilterValue } = props

	const [isInvalidDateTo, setIsInvalidDateTo] = useState(false)

	/** Установить дату от */
	const setFromDate = (dateStr?: string) => {
		filterValue.valueFrom = dateStr
		setFilterValue(filterValue)
	}

	/** Установить дату до */
	const setToDate = (dateStr?: string) => {
		const currentDate = new Date()
		const newToDate = dateStr || ''

		const toDateParts = newToDate.split('.')
		const toDate = new Date(`${toDateParts[2]}-${toDateParts[1]}-${toDateParts[0]}`)

		const fromDateParts = filterValue.valueFrom?.split('.')
		const fromDate = fromDateParts
			? new Date(`${fromDateParts[2]}-${fromDateParts[1]}-${fromDateParts[0]}`)
			: null

		// Проверка, что "Дата до" не меньше "Даты от"
		if (fromDate && toDate < fromDate) {
			showError("'Дата по' не может быть установлена раньше 'Даты с'")
			setIsInvalidDateTo(true)
			return
		}

		// Проверка, что "Дата до" не больше текущей даты
		if (
			toDate > currentDate &&
			(filterValue.fieldCode == 'dataBt' || filterValue.fieldCode == 'createdAt')
		) {
			showError("'Дата по' не может быть установлена позже текущей даты")
			setIsInvalidDateTo(true)
			return
		}
		setIsInvalidDateTo(false)

		const updatedFilterValue = {
			...filterValue,
			valueTo: newToDate,
			reset: filterValue.reset,
		}
		setFilterValue(updatedFilterValue)
	}

	return (
		<FilterItemWrapper {...props}>
			<div className="filter-item-date">
				<CustomInputDate
					type={InputDateType.date}
					value={masks.applyDateMask(filterValue.valueFrom ?? '')}
					setValue={setFromDate}
				/>
				<span style={{ color: '#AAABAD' }}>-</span>
				<CustomInputDate
					type={InputDateType.date}
					value={masks.applyDateMask(filterValue.valueTo ?? '')}
					setValue={setToDate}
					isInvalid={isInvalidDateTo}
				/>
			</div>
		</FilterItemWrapper>
	)
}
