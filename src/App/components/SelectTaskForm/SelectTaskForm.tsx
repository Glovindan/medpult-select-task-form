import React from 'react';
import { selectTaskContext } from '../../stores/SelectTaskContext';
import Header from '../Header/Header';
import SelectTaskFiltersForm from '../SelectTaskFiltersForm/SelectTaskFiltersForm';
import SelectTaskList from '../SelectTaskList/SelectTaskList';

/** Форма отбора задач */
export default function SelectTaskForm() {
	const [data, setValue] = selectTaskContext.useState()
	const setId = (id: string) => setValue("id", id);
	// Подгрузка данных
	React.useLayoutEffect(() => {
	}, [])

	return (
		<selectTaskContext.Provider value={{ data, setValue }}>
			<div className="select-task-form">
				<div className="select-task-form__header">
					<Header title='Форма отбора задач' />
				</div>
				<div className="select-task-form__content">
					<div className="select-task-form__filters">
						<SelectTaskFiltersForm />
					</div>
					<div className="select-task-form__list">
						<SelectTaskList />
					</div>
				</div>
			</div>
		</selectTaskContext.Provider>
	)
}