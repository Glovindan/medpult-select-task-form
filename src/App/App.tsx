import React, { useContext, useEffect, useReducer, useState } from 'react'
import { selectTaskContext } from './stores/SelectTaskContext';
import Header from './components/Header/Header';
import FilterButton from './components/Header/FilterButton/FilterButton';

const Test = () => {
	const { data, setValue } = selectTaskContext.useContext();

	const setId = (id: string) => setValue("id", id);

	return <input type="text" value={data.id} onChange={(ev) => setId(ev.target.value)} />
}

export default function App() {
	const [data, setValue] = selectTaskContext.useState()

	// Подгрузка данных
	React.useLayoutEffect(() => {
	}, [])

	return (
		<selectTaskContext.Provider value={{ data, setValue }}>
			<div style={{ background: "#F2F4F6", padding: "10px", minHeight: "100%" }}>
				{/* Хедер */}
				<Header title='Форма отбора задач'>
				</Header>
				{/* Столбец с фильтрами */}
				{/* Столбец с таблицей */}
			</div>
		</selectTaskContext.Provider>
	)
}
