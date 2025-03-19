import React, { PropsWithChildren, useEffect, useState } from 'react'
import icons from '../../../shared/icons'
import Button from '../../../Button/Button'

interface FilterItemWrapperHeaderProps {
	title: string
	/** Изначальное значение открытости обертки */
	isOpenInit?: boolean
	/** Изменение изначального значения открытости обертки */
	setIsOpenInit?: (isOpen: boolean) => void
}

/** Обертка панели фильтров */
export default function FilterItemWrapperHeader({
	title,
	children,
	isOpenInit,
	setIsOpenInit,
}: PropsWithChildren<FilterItemWrapperHeaderProps>) {
	const [isOpen, setIsOpen] = useState<boolean>(isOpenInit || false)
	useEffect(() => {
		setIsOpen(isOpenInit ?? false)
	}, [isOpenInit])
	// Первая заглваная
	const capitalize = (str: string) => {
		return str[0].toUpperCase() + str.toLowerCase().slice(1)
	}

	const toggleIsOpen = () => {
		const newValue = !isOpen

		if (setIsOpenInit) setIsOpenInit(newValue)
		setIsOpen(newValue)
	}

	return (
		<div className="filter-item-wrapper-header">
			<div className="filter-item-wrapper-header__header" onClick={toggleIsOpen}>
				<div className="filter-item-wrapper-header__title">{capitalize(title)}</div>
				<div
					className={`filter-item-wrapper-header__arrow ${
						isOpen ? 'filter-item-wrapper-header__arrow_open' : null
					}`}
				>
					{icons.filterItemArrow}
				</div>
			</div>
			{isOpen && <div className="filter-item-wrapper-header__content">{children}</div>}
		</div>
	)
}
