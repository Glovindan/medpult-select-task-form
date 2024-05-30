import React, { useContext, useEffect, useReducer, useState } from 'react'
import { selectTaskContext } from './stores/SelectTaskContext';

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
			{/* Хедер */}
			{/* Столбец с фильтрами */}
			{/* Столбец с таблицей */}
		</selectTaskContext.Provider>
	)
}
