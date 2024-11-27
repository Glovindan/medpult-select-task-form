import React, { useRef, useState } from 'react'
import { ItemData, ListColumnData } from '../CustomListTypes'

interface ListColumnProps extends ListColumnData {
	data: ItemData<any>

	listRef: React.RefObject<HTMLDivElement>
}

/** Столбец одной строки таблицы */
function CustomListRowColumn(props: ListColumnProps) {
	const { fr, data, isLink, onClick, listRef, isRollable } = props;

	const onClickColumn = isLink && onClick ? () => { onClick(data) } : () => { };

	const wrapperRef = useRef<HTMLDivElement>(null);
	const spanRef = useRef<HTMLSpanElement>(null);

	const [isShowMore, setIsShowMore] = useState<boolean>(false);

	const showMore = () => {
		if (!isRollable) return;

		setIsShowMore(true);

		if (!spanRef.current) return
		if (!wrapperRef.current) return
		if (!listRef.current) return

		spanRef.current.style.width = wrapperRef.current.getBoundingClientRect().width + "px"
	}

	const hideMore = () => {
		setIsShowMore(false);

		if (!spanRef.current) return
		spanRef.current.style.removeProperty("margin-top")
	}

	return (
		<div className={
			isLink
				? "custom-list-row-column custom-list-row-column__link"
				: "custom-list-row-column"
		} style={{ flex: fr }} ref={wrapperRef}>
			<span onMouseOver={showMore} onMouseOut={hideMore} ref={spanRef} title={data.value} onClick={onClickColumn} className={isShowMore ? 'custom-list-row-column__more' : 'custom-list-row-column__less'}>
				{data.value}
			</span>
		</div>
	)
}

export default CustomListRowColumn
