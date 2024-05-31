import React from 'react'
import { IInputData } from '../../shared/types/types'
import { ListColumnData } from '../CustomListTypes'

interface ListColumnProps extends ListColumnData {
	data: IInputData
}

/** Столбец одной строки таблицы */
function CustomListRowColumn(props: ListColumnProps) {
	const { fr, data, isLink, onClick } = props;

	const onClickColumn = isLink && onClick ? () => { onClick(data) } : () => { };

	return (
		<div className={
			isLink
				? "custom-list-row-column custom-list-row-column__link"
				: "custom-list-row-column"
		} style={{ flex: fr }}>
			<span title={data.value} onClick={onClickColumn}>
				{data.value}
			</span>
		</div>
	)
}

export default CustomListRowColumn
