import React from 'react'
import { selectTaskContext } from './stores/SelectTaskContext';
import Header from './components/Header/Header';
import SelectTaskForm from './components/SelectTaskForm/SelectTaskForm';

// const Test = () => {
// 	const { data, setValue } = selectTaskContext.useContext();

// 	const setId = (id: string) => setValue("id", id);

// 	return <input type="text" value={data.id} onChange={(ev) => setId(ev.target.value)} />
// }

export default function App() {
	return (
		<SelectTaskForm />
	)
}
