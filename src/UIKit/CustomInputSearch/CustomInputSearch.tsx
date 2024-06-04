import React, { useEffect, useRef, useState } from 'react';
import CustomInput from '../CustomInput/CustomInput';
import CustomSelectList from '../CustomSelect/CustomSelectList/CustomSelectList';
import CustomSelectRow from '../CustomSelect/CustomSelectRow/CustomSelectRow';
import InputButton from '../InputButton/InputButton';
import icons from '../shared/icons';
import { CustomInputProps } from '../shared/types/types';

interface CustomInputSearch extends CustomInputProps {
	/** Код значения поля ввода */
	code: string
	/** Измение состояния */
	setValue: (value: string, code: string) => any
	/** Получение данных выпадающего списка */
	getDataHandler: (query?: any) => Promise<any>,
	/** Флажок режима просмотра */
	isViewMode: boolean,
}

function CustomInputSearch(props: CustomInputSearch) {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [isFull, setIsFull] = useState<boolean>(true);
	const [listWidth, setListWidth] = useState<number>(100);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [values, setValues] = useState<any[]>([]);
	const [buffer, setBuffer] = useState<any>();
	const rootRef = useRef<HTMLDivElement>(null);
	const wrapperRef = useRef<HTMLDivElement>(null);

	/** Нажатие на поле ввода */
	const clickHandler = async () => {
		// Записать в буфер и очистить в поле
		setBuffer("")
	}

	/** Загрузить данные выпадающего списка */
	const loadData = async (query: string) => {
		// Показать лоадер
		setIsLoading(true)

		// Показать данные
		setValues([]);
		const values = await props.getDataHandler(query);
		setValues(values);

		// Скрыть лоадер
		setIsLoading(false)
	}

	/** При изменении значения в поле ввода */
	const inputHandler = async (ev) => {
		const value = ev.target.value;
		props.setValue(value, "");

		// Показать список
		setIsOpen(true)

		await loadData(value);
	}

	/** Выбор значения выпадающего списка */
	const handleOptionClick = async ({ value, code, isFull }: { value: string, code: string, isFull: boolean }) => {
		setIsOpen(false)

		setIsFull(isFull);
		props.setValue(value, code);
	}

	/** Не закрывать список подсказок, если адрес неполный */
	React.useLayoutEffect(() => {
		if (props.value && !isFull) {
			setIsOpen(true)
			loadData(props.value)
		}
	}, [props.value, isFull])

	/** Вычисление размера выпадающего списка */
	useEffect(() => {
		const wrapper = wrapperRef.current!;
		setListWidth(wrapper.getBoundingClientRect().width);
	}, [isOpen])

	const buttonSvg = icons.Triangle;

	return (
		<div className="custom-select" ref={rootRef}>
			<CustomInput
				{...props}
				onInput={inputHandler}
				clickHandler={clickHandler}
				wrapperRef={wrapperRef}
				cursor={props.isViewMode ? 'text' : 'pointer'}
				isOpen={isOpen}
				buttons={[<InputButton svg={buttonSvg} clickHandler={clickHandler} />]}
			/>
			{isOpen &&
				<CustomSelectList
					rootRef={rootRef}
					isOpen={isOpen}
					closeHandler={() => setIsOpen(false)}
					isLoading={isLoading}
					listWidth={listWidth}
				>
					{values.map(value =>
						<CustomSelectRow
							value={value.value}
							isFull={value.isFull}
							clickHandler={handleOptionClick}
						/>
					)}
				</CustomSelectList>
			}
		</div>
	)
}

export default CustomInputSearch
