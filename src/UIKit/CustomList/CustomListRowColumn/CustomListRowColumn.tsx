import React from 'react'
import { ItemData, ListColumnData } from '../CustomListTypes'
import { icon } from '../../../App/shared/iconsCol'

interface ListColumnProps extends ListColumnData {
	data: ItemData<any>
}

/** Столбец одной строки таблицы */
function CustomListRowColumn(props: ListColumnProps) {
	const { fr, data, isLink, onClick, isIcon } = props

	const onClickColumn =
		isLink && onClick
			? () => {
					onClick(data)
			  }
			: () => {}

	const iconToShow = data.value === 'collective' ? icon.collective : icon.individ

	return (
		<div
			className={
				isLink ? 'custom-list-row-column custom-list-row-column__link' : 'custom-list-row-column'
			}
			style={{ flex: fr }}
		>
			<span title={data.value} onClick={onClickColumn}>
				{isIcon && iconToShow}
				{!isIcon && data.value}
			</span>
		</div>
	)
}

export default CustomListRowColumn
