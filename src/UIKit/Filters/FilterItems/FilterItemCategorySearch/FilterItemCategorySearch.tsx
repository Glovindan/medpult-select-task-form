import React, { useState } from 'react'
import FilterItemWrapper from '../FilterItemWrapper/FilterItemWrapper'
import { FilterItemProps, ObjectItem, ListFilter, FilterItemWrapperProps } from '../../FiltersTypes'
import CustomInputCheckbox from '../../../CustomInputCheckbox/CustomInputCheckbox'
import Loader from '../../../Loader/Loader'
import CustomInput from '../../../CustomInput/CustomInput'

interface FilterItemCategorySearchProps
	extends FilterItemProps<ListFilter>,
		FilterItemWrapperProps {
	/** Список вариантов */
	variants: ObjectItem[]
}

/** Обертка элемента фильтров для строчного поиска */
export default function FilterItemCategorySearch(props: FilterItemCategorySearchProps) {
	const { title, filterValue, setFilterValue, variants } = props

	/** Состояние для хранения значения поиска */
	const [searchValue, setSearchValue] = useState('')

	/** Состояние для отслеживания загрузки данных */
	const [isLoading, setIsLoading] = useState(false)

	/** Разметка чекбоксов */
	const [checkboxes, setCheckboxes] = useState<React.JSX.Element[]>([])

	/** Фильтрация вариантов на основе поискового запроса */
	const filteredVariants = variants.filter((variant) =>
		variant.value.toLowerCase().includes(searchValue.toLowerCase())
	)

	/** Получение чекбоксов по текущим фильтрам и вариантам */
	const getCheckboxes = () =>
		filteredVariants.map((variant) => {
			const checked = isVariantChecked(variant)

			return (
				<CustomInputCheckbox
					key={variant.code}
					title={variant.value}
					checked={checked}
					setValue={toggleChecked(variant.code)}
				/>
			)
		})

	/** Отрисовка чекбоксов */
	React.useLayoutEffect(() => {
		setCheckboxes(getCheckboxes())
	}, [filterValue.values.length, variants, searchValue])

	/** Проверка является ли вариант отмеченным */
	const isVariantChecked = (variant: ObjectItem): boolean => {
		return Boolean(filterValue.values.find((value) => value.code == variant.code))
	}

	/** Переключение состояния чекбокса */
	const toggleChecked = (code: string) => {
		return (value: boolean) => {
			const currentValues = filterValue
			if (!value) {
				currentValues.values = currentValues.values.filter((value) => value.code != code)
			} else {
				currentValues.values.push(new ObjectItem({ code: code }))
			}

			setFilterValue(currentValues)
		}
	}

	return (
		<FilterItemWrapper {...props}>
			<CustomInput value={searchValue} setValue={setSearchValue} style={{ marginBottom: '10px' }} />
			<div className="filter-item-variants-search">
				{isLoading ? <Loader /> : filteredVariants.length > 0 ? checkboxes : null}
			</div>
		</FilterItemWrapper>
	)
}
