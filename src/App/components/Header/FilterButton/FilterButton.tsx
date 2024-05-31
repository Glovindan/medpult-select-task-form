import React from 'react'
import icons from '../../../shared/icons'
import Button from '../../../../UIKit/Button/Button'
import { ButtonType } from '../../../../UIKit/Button/ButtonTypes'

interface FilterButtonProps {
	isShowIndicator?: boolean
	clickHandler?: () => any
}

/** Кнопка для открытия панель фильтров */
function FilterButton({ isShowIndicator = false, clickHandler = () => { } }: FilterButtonProps) {
	const buttonTitle = (
		<span className='filter-button'>
			<span>
				фильтр
			</span>
			<span>
				{icons.FilterIcon}
			</span>
		</span>
	)

	return (
		<>
			{isShowIndicator && <span className="indicator">{icons.redCircle}</span>}
			<Button title={buttonTitle} clickHandler={clickHandler} buttonType={ButtonType.outline} />
		</>
	)
}

export default FilterButton
