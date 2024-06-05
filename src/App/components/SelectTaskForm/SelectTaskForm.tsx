import React, { useState } from 'react';
import { selectTaskContext } from '../../stores/SelectTaskContext';
import Header from '../Header/Header';
import SelectTaskFiltersForm from '../SelectTaskFiltersForm/SelectTaskFiltersForm';
import SelectTaskList from '../SelectTaskList/SelectTaskList';

/** Форма отбора задач */
export default function SelectTaskForm() {
	const [data, setValue] = selectTaskContext.useState()
	// Подгрузка данных
	React.useLayoutEffect(() => {
	}, [])

	const [isShowFilters, setIsShowFilters] = useState<boolean>(true);
	const toggleShowFilters = () => setIsShowFilters(!isShowFilters);

	return (
		<selectTaskContext.Provider value={{ data, setValue }}>
			<div className="select-task-form">
				<div className="select-task-form__header">
					<Header clickFilterHandler={toggleShowFilters} title='Форма отбора задач' />
				</div>
				<div className="select-task-form__content">
					<div className={`select-task-form__filters${!isShowFilters ? " select-task-form__filters_hidden" : ""}`}>
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