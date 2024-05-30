import { CustomInputProps, IInputData } from '../shared/types'

export interface CustomSelectProps extends CustomInputProps {
	getDataHandler: () => Promise<IInputData[]>
	isViewMode?: boolean
	isInvalid?: boolean
}
