import React, { PropsWithChildren, useEffect, useState } from 'react'
import CustomInput from '../../../../../UIKit/CustomInput/CustomInput'
import FilterItemWrapper from '../FilterItemWrapper/FilterItemWrapper';
import { FilterItemProps, FilterValue, ListFilter } from '../../FiltersTypes';
import CustomInputCheckbox from '../../../../../UIKit/CustomInputCheckbox/CustomInputCheckbox';

interface FilterItemCategoryProps extends FilterItemProps<ListFilter> {
	/** Название фильтра */
	title: string
	/** Список вариантов */
	variants: FilterValue[]
}

/** Обертка элемента фильтров для строчного поиска */
export default function FilterItemCategory({ title, filterValue, setFilterValue, variants }: FilterItemCategoryProps) {
	const [checkboxes, setCheckboxes] = useState<React.JSX.Element[]>([]);

	const getCheckboxes = () => variants.map(variant => {
		const checked = isVariantChecked(variant)

		return <CustomInputCheckbox title={variant.value} checked={checked} setValue={toggleChecked(variant.code)} />
	})

	useEffect(() => {
		setCheckboxes(getCheckboxes());
	}, [filterValue.values.length])

	/** Проверка является ли вариант отмеченным */
	const isVariantChecked = (variant: FilterValue): boolean => {
		return Boolean(filterValue.values.find(value => value.code == variant.code))
	}

	/** Проверка является ли вариант отмеченным */
	const toggleChecked = (code: string) => {
		return (value: boolean) => {
			const currentValues = filterValue;
			if (!value) {
				currentValues.values = currentValues.values.filter(value => value.code != code);
			} else {
				currentValues.values.push(new FilterValue({ code: code }))
			}

			setFilterValue(currentValues)
		}
	}

	return (
		<FilterItemWrapper title={title}>
			<div className="filter-item-variants">
				{checkboxes}
			</div>
		</FilterItemWrapper>
	)
}