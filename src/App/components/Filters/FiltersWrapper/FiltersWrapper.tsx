import React, { PropsWithChildren } from 'react'
import Button from '../../../../UIKit/Button/Button'
import { ButtonType } from '../../../../UIKit/Button/ButtonTypes'

interface FiltersWrapperProps {
	searchHandler?: () => void
}

/** Обертка панели фильтров */
export default function FiltersWrapper({ searchHandler, children }: PropsWithChildren<FiltersWrapperProps>) {

	return (
		<div className="filters-wrapper">
			<div className="filters-wrapper__header">фильтр</div>
			<div className="filters-wrapper__buttons">
				<Button title={"сбросить"} buttonType={ButtonType.outline} clickHandler={() => { }} />
				<Button title={"поиск"} clickHandler={searchHandler} />
			</div>
			<div className="filters-wrapper__list">
				{children}
			</div>
		</div>
	)
}