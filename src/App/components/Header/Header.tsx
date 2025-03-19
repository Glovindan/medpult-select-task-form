import React, { PropsWithChildren, useState } from 'react'
import icons from '../../shared/icons'
import { selectTaskContext } from '../../stores/SelectTaskContext'

interface HeaderProps {
	/** Заголовок */
	title: string
	/** Количество элементов */
	elementsCount?: number
	/** Обработчик нажатия на кнопку Фильтры */
	clickFilterHandler?: () => void
}

/** Шапка страницы */
function Header({
	title,
	elementsCount = 0,
	clickFilterHandler,
	children,
}: PropsWithChildren<HeaderProps>) {
	const { data, setValue } = selectTaskContext.useContext()

	/** Проверка имеются ли активные фильтры */
	const checkHasActiveFilters = (): boolean => {
		// Поиск по категориям
		if (data.filters.author.values.length) return true
		if (data.filters.authorGroup.values.length) return true
		if (data.filters.executor.values.length) return true
		if (data.filters.executorGroup.values.length) return true
		if (data.filters.status.values.length) return true
		if (data.filters.type.values.length) return true
		if (data.filters.sort.values.length) return true
		if (data.filters.urgency.values.length) return true
		if (data.filters.channel.values.length) return true
		if (data.filters.formApproval.values.length) return true
		if (data.filters.statusApproval.values.length) return true

		// Строковый поиск
		if (data.filters.number.value) return true
		if (data.filters.insurer.value) return true
		if (data.filters.fio.value) return true
		if (data.filters.policy.value) return true

		// Поиск по датам
		if (data.filters.createdAt.valueFrom || data.filters.createdAt.valueTo) return true
		if (data.filters.controledAt.valueFrom || data.filters.controledAt.valueTo) return true
		if (data.filters.dataBt.valueFrom || data.filters.dataBt.valueTo) return true
		if (data.filters.termApproval.valueFrom || data.filters.termApproval.valueTo) return true

		return false
	}

	const [isShowIndicator, setIsShowIndicator] = useState<boolean>(checkHasActiveFilters())

	/** Обработчик нажатия на кнопку */
	const clickHandler = () => {
		if (clickFilterHandler) clickFilterHandler()
	}

	/** Нажатие на кнопку назад */
	const onClickReturn = () => {
		history.back()
	}

	React.useLayoutEffect(() => setIsShowIndicator(checkHasActiveFilters()), [data])

	return (
		<div className="header">
			<div className="header__returnButton" onClick={onClickReturn}>
				{icons.ReturnButton}
			</div>
			<div className="header__title">{title}</div>
			<div className="header__count">
				Всего: <span>{elementsCount}</span>
			</div>
			<div className="header__buttons">{children}</div>
		</div>
	)
}

export default Header
