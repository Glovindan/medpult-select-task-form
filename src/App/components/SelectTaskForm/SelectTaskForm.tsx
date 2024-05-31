import React from 'react'
import { selectTaskContext } from '../../stores/SelectTaskContext'
import Header from '../Header/Header'
import FiltersWrapper from '../Filters/FiltersWrapper/FiltersWrapper';
import FilterItemWrapper from '../Filters/FilterItems/FilterItemWrapper/FilterItemWrapper';
import FilterItemString from '../Filters/FilterItems/FilterItemString/FilterItemString';

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
						<FiltersWrapper>
							<FilterItemString title='Номер задачи' />
							<FilterItemWrapper title='Статус задачи'>
								test
							</FilterItemWrapper>
							<FilterItemWrapper title='Тип задачи'>
								test
							</FilterItemWrapper>
							<FilterItemWrapper title='Вид задачи'>
								test
							</FilterItemWrapper>
							<FilterItemWrapper title='Дата создания'>
								test
							</FilterItemWrapper>
							<FilterItemWrapper title='Дата контроля'>
								test
							</FilterItemWrapper>
							<FilterItemWrapper title='Автор'>
								test
							</FilterItemWrapper>
							<FilterItemWrapper title='Исполнитель'>
								test
							</FilterItemWrapper>
							<FilterItemWrapper title='Обращение'>
								test
							</FilterItemWrapper>
							<FilterItemWrapper title='Застрахованный'>
								test
							</FilterItemWrapper>
						</FiltersWrapper>
					</div>
					{/* Столбец с таблицей */}
					<div className="select-task-form__list">
						<FiltersWrapper />
					</div>
				</div>
			</div>
		</selectTaskContext.Provider>
	)
}