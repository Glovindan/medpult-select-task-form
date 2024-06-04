import React, { useEffect, useState } from 'react'

interface CustomSelectRowProps {
	value: string,
	clickHandler: any,
	isFull?: boolean,
	code?: string,
}

/** Элемент выпадающего списка */
function CustomSelectRow({ value, code, isFull, clickHandler }: CustomSelectRowProps) {
	const onClickRow = (ev) => {
		ev.stopPropagation();
		clickHandler({ value, code, isFull })
	}
	return (
		<div className="custom-select__row" onClick={onClickRow}>
			{value}
		</div>
	)
}

export default CustomSelectRow
