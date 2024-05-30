import React, { Reducer, useReducer } from 'react'
import { RequestContext } from '../stores/RequestContext'
import { RequestData } from './types'

/** Action для reducer */
interface ReducerAction {
	/** Тип операции */
	type: ActionType
	/** Передаваемое значение */
	payload: any
}

/** Типы действий */
enum ActionType {
	/** Изменить часть данных */
	PATCH = 'PATCH',
}

/** Изменение значений глобального состояния */
const reducer = <T>(state: T, action: ReducerAction): T => {
	switch (action.type) {
		case ActionType.PATCH: {
			const payload = action.payload as { key: string; value: any }

			return {
				...state,
				[payload.key]: payload.value,
			}
		}

		default:
			return state
	}
}

/** Хук для работы с глобальным состоянием */
export const useGlobalState = <T>(initialState: T): [T, (key: string, value: any) => void] => {
	const [state, dispatch] = React.useReducer<Reducer<T, ReducerAction>>(reducer<T>, initialState)

	/** Установка значения поля глобального состояния */
	const setValue = React.useCallback((key: string, value: any) => {
		dispatch({ type: ActionType.PATCH, payload: { key: key, value: value } })
	}, [])

	return [state, setValue]
}
