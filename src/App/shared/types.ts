export interface IInputData<DataType = any> {
	value: string
	data?: DataType
}

const data: IInputData<number> = {
	value: '',
	data: 124124,
}
