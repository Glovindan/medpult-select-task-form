import React from 'react'

// const imgCollective = (
// 	<svg
// 		width="17px"
// 		height="17px"
// 		viewBox="0 0 24 24"
// 		fill="none"
// 		xmlns="http://www.w3.org/2000/svg"
// 	>
// 		<path
// 			d="M3 19V18C3 15.7909 4.79086 14 7 14H11C13.2091 14 15 15.7909 15 18V19M15 11C16.6569 11 18 9.65685 18 8C18 6.34315 16.6569 5 15 5M21 19V18C21 15.7909 19.2091 14 17 14H16.5M12 8C12 9.65685 10.6569 11 9 11C7.34315 11 6 9.65685 6 8C6 6.34315 7.34315 5 9 5C10.6569 5 12 6.34315 12 8Z"
// 			stroke="#000000"
// 			stroke-width="2"
// 			stroke-linecap="round"
// 			stroke-linejoin="round"
// 		/>
// 	</svg>
// )
// const imgIndivid = (
// 	<svg
// 		width="17px"
// 		height="17px"
// 		viewBox="0 0 24 24"
// 		fill="none"
// 		xmlns="http://www.w3.org/2000/svg"
// 	>
// 		<path
// 			d="M5 20V19C5 16.2386 7.23858 14 10 14H14C16.7614 14 19 16.2386 19 19V20M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
// 			stroke="#000000"
// 			stroke-width="2"
// 			stroke-linecap="round"
// 			stroke-linejoin="round"
// 		/>
// 	</svg>
// )
const imgCollective = (
	<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M17 21V19C17 17.3431 15.6569 16 14 16H10C8.34315 16 7 17.3431 7 19V21"
			stroke="#6B6C6F"
			stroke-width="2"
			stroke-linecap="round"
		/>
		<circle cx="12" cy="10.5" r="2.5" stroke="#6B6C6F" stroke-width="2" />
		<path
			d="M6 11H5C3.34315 11 2 12.3431 2 14V15"
			stroke="#6B6C6F"
			stroke-width="2"
			stroke-linecap="round"
		/>
		<circle
			cx="2.5"
			cy="2.5"
			r="2.5"
			transform="matrix(-1 0 0 1 8 3)"
			stroke="#6B6C6F"
			stroke-width="2"
		/>
		<path
			d="M18 11H19C20.6569 11 22 12.3431 22 14V15"
			stroke="#6B6C6F"
			stroke-width="2"
			stroke-linecap="round"
		/>
		<circle cx="18.5" cy="5.5" r="2.5" stroke="#6B6C6F" stroke-width="2" />
	</svg>
)
const imgIndivid = (
	<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M19 21V19C19 17.9391 18.5786 16.9217 17.8284 16.1716C17.0783 15.4214 16.0609 15 15 15H9C7.93913 15 6.92172 15.4214 6.17157 16.1716C5.42143 16.9217 5 17.9391 5 19V21"
			stroke="#6B6C6F"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
			stroke="#6B6C6F"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
)

const icon = {
	'collective': imgCollective,
	'individ': imgIndivid,
}

export { icon }
