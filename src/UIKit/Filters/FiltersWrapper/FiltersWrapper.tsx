import React, { PropsWithChildren, useEffect, useRef } from 'react'
import Button from '../../Button/Button'
import { ButtonType } from '../../Button/ButtonTypes'
import icons from '../../../App/shared/icons'
interface FiltersWrapperProps {
	resetHandler?: () => void
	searchHandler?: () => Promise<void>
	isSearchButtonDisabled?: boolean
	clickFilterHandler?: () => void
}

/** Обертка панели фильтров */
export default function FiltersWrapper({
	searchHandler,
	resetHandler,
	children,
	isSearchButtonDisabled,
	clickFilterHandler,
}: PropsWithChildren<FiltersWrapperProps>) {
	// Обработчик нажатия на enter
	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Enter' && searchHandler) searchHandler()
			removeListener()
		}

		const removeListener = () => {
			document.removeEventListener('keydown', handleKeyDown)
		}

		document.addEventListener('keydown', handleKeyDown)

		return () => removeListener()
	}, [searchHandler])

	/** Обработчик нажатия на кнопку */
	const clickHandler = () => {
		if (clickFilterHandler) clickFilterHandler()
	}

	return (
		<div className="filters-wrapper">
			<div className="filters-wrapper__header">
				<span>фильтр</span>
				<div className="header__filterButton">
					<Button
						title={icons.FilterButton}
						clickHandler={clickHandler}
						style={{ backgroundColor: '#f9f9fa' }}
					/>
				</div>
			</div>
			<div className="filters-wrapper__buttons">
				<Button title={'сбросить'} buttonType={ButtonType.outline} clickHandler={resetHandler} />
				<Button title={'поиск'} clickHandler={searchHandler} disabled={isSearchButtonDisabled} />
			</div>
			<div className="filters-wrapper__list">{children}</div>
		</div>
	)
}
