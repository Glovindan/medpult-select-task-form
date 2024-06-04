export interface CustomInputProps extends React.ComponentProps<'input'> {
	/** Значение состояния */
	value: string
	/** Изменение состояния */
	setValue: (value: string, ...args: any) => any
	/** Дополнительные кнопки */
	buttons?: any
	/** Обработчик нажатия на поле ввода */
	clickHandler?: (ev) => void
	/** Тип курсора */
	cursor?: string
	/** Флажок открытости (Для выпадающего списка) */
	isOpen?: boolean
	/** Ссылка на обертку поля ввода */
	wrapperRef?: React.RefObject<HTMLDivElement>
	/** Флажок только для чтения */
	readOnly?: boolean
	/** Флажок режим просмотра */
	isViewMode?: boolean
	/** Надпись при пустом значении */
	placeholder?: string
	/** Функция маски */
	maskFunction?: (value: string) => string
	/** Флажок валидации */
	isInvalid?: boolean
	/** Кастомные классы */
	customClassname?: string
}
