export interface IInputData<DataType = any> {
	value: string
	data?: DataType
}

export interface CustomInputProps extends React.ComponentProps<'input'> {
	values: { [key: string]: any }
	name: string
	buttons?: any
	inputHandler?: (name: string, value: IInputData) => void
	clickHandler?: (ev) => void
	cursor?: string
	isOpen?: boolean
	wrapperRef?: React.RefObject<HTMLDivElement>
	readOnly?: boolean
	isViewMode?: boolean
	placeholder?: string
	maskFunction?: (value: string) => string
	getValueHandler?: (props: CustomInputProps) => string
	isInvalid?: boolean
	customClassname?: string
}
