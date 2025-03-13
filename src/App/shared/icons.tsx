import React from 'react'

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

const FilterButton = (
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M18 18L12 12L18 6"
			stroke="#45B0E6"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M11 18L5 12L11 6"
			stroke="#45B0E6"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
)
const FilterButtonSwow = (
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M6 6L12 12L6 18"
			stroke="#45B0E6"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M13 6L19 12L13 18"
			stroke="#45B0E6"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
)
export default {
	/** Кнопка назад */
	ReturnButton,
	FilterButton,
	FilterButtonSwow,
}
