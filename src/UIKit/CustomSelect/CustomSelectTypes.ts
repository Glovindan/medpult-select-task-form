import { CustomInputProps, IInputData } from '../shared/types/types'

export interface CustomSelectProps extends CustomInputProps {
	getDataHandler: () => Promise<IInputData[]>
	isViewMode?: boolean
	isInvalid?: boolean
}
