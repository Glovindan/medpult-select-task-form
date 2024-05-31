import React from "react"

const ReturnButton = (
	<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
		<circle cx="21" cy="21" r="21" fill="#ECEFF1"></circle>
		<line
			x1="23.5507"
			y1="28.4649"
			x2="16.0341"
			y2="20.9483"
			stroke="#9EA3A8"
			stroke-width="2"
		></line>
		<line
			x1="23.7071"
			y1="14.7071"
			x2="16.7071"
			y2="21.7071"
			stroke="#9EA3A8"
			stroke-width="2"
		></line>
	</svg>
)

const FilterIcon = (
	<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M1 3H15M3 8H13M6 13H10"
			stroke="#21A038"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
)

const redCircle = (
	<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
		<circle cx="8" cy="8" r="8" fill="#FF3333" />
	</svg>
)

export default {
	/** Кнопка назад */
	ReturnButton,

	/** Иконка фильтра */
	FilterIcon,

	/** Красный круг */
	redCircle
}
