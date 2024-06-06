import React, { useEffect, useRef, useState } from 'react';
import { selectTaskContext } from '../../stores/SelectTaskContext';
import Header from '../Header/Header';
import SelectTaskFiltersForm from '../SelectTaskFiltersForm/SelectTaskFiltersForm';
import SelectTaskList from '../SelectTaskList/SelectTaskList';

/** Форма отбора задач */
export default function SelectTaskForm() {
	const [data, setValue] = selectTaskContext.useState()
	const contentWrapperRef = useRef<HTMLDivElement>(null)

	// Подгрузка данных
	React.useLayoutEffect(() => {
	}, [])

	const [isShowFilters, setIsShowFilters] = useState<boolean>(true);
	const toggleShowFilters = () => setIsShowFilters(!isShowFilters);

	// Ширина списка
	const [listWidth, setListWidth] = useState<number>(0);

	// Назначение обработчиков событий
	useEffect(() => {
		handleResizeWrapper();
		window.addEventListener("resize", handleResizeWrapper)

		return () => { window.removeEventListener("resize", handleResizeWrapper) }
	}, [])

	// Обработчик изменения размера
	const handleResizeWrapper = () => {
		const width = contentWrapperRef.current?.getBoundingClientRect().width ?? 0;
		setListWidth(width)
	}

	return (
		<selectTaskContext.Provider value={{ data, setValue }}>
			<div className="select-task-form">
				<div className="select-task-form__header">
					<Header clickFilterHandler={toggleShowFilters} title='Форма отбора задач' />
				</div>
				<div className="select-task-form__content" ref={contentWrapperRef}>
					<div className={`select-task-form__filters${!isShowFilters ? " select-task-form__filters_hidden" : ""}`}>
						<SelectTaskFiltersForm />
					</div>
					<div className="select-task-form__list" style={{ width: "100%", overflowX: "auto" }}>
						<div /* style={{ width: `${listWidth}px` }} */>
							<SelectTaskList width={listWidth} />
						</div>
					</div>
				</div>
			</div>
		</selectTaskContext.Provider >
	)
}