import React, { ButtonHTMLAttributes, Children, PropsWithChildren, ReactNode, useEffect, useReducer, useRef, useState } from 'react'
import icons from '../../shared/icons'
import Button from '../../../UIKit/Button/Button'
import { ButtonType } from '../../../UIKit/Button/ButtonTypes'
import FilterButton from './FilterButton/FilterButton'

interface HeaderProps {
	/** Заголовок */
	title: string,
	/** Количество элементов */
	elementsCount?: number
}

function Header({ title, elementsCount = 0, children }: PropsWithChildren<HeaderProps>) {
	const [isShowIndicator, setIsShowIndicator] = useState<boolean>(false);
	const toggleIndicator = () => {
		setIsShowIndicator(!isShowIndicator);
	}

	return (
		<div className="header">
			<div className="header__returnButton">
				{icons.ReturnButton}
			</div>
			<div className="header__filterButton">
				<FilterButton isShowIndicator={isShowIndicator} clickHandler={toggleIndicator} />
			</div>
			<div className="header__title">
				{title}
			</div>
			<div className="header__count">
				Отобрано: <span>{elementsCount}</span>
			</div>
			<div className="header__buttons">
				{children}
			</div>
		</div>
	)
}

export default Header
