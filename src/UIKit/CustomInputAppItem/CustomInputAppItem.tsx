import React from 'react'
import { redirectSPA } from '../shared/utils'
import CustomInput from '../CustomInput/CustomInput'
import InputButton from '../InputButton/InputButton'
import icons from '../shared/icons'

function CustomInputAppItem(props) {
	const { href, values, name, inputHandler, saveStateHandler, getValueHandler = undefined, removeValueHandler = undefined, isInvalid, clickHandler } = props

	const getValueByName = () => {
		if (getValueHandler) return getValueHandler();
		const value = values[name];
		if (!value) return "";

		return value.value
	}

	const searchButtonSvg = icons.Search;
	const removeButtonSvg = icons.Cross;

	const onClickSearchButton = (ev) => {
		ev.stopPropagation();
		if (!href) return
		// save state to localStorage
		saveStateHandler();
		// redirect
		redirectSPA(href);
	}

	const onClickRemoveButton = (ev) => {
		ev.stopPropagation();
		if (removeValueHandler) return removeValueHandler()
		if (!inputHandler) return;

		inputHandler(name, { value: "", data: { code: "" } })
	}

	const searchButton = <InputButton svg={searchButtonSvg} clickHandler={onClickSearchButton} />
	const removeButton = <InputButton svg={removeButtonSvg} clickHandler={onClickRemoveButton} />

	const button =
		getValueByName()
			? removeButton
			: searchButton

	return (
		<CustomInput cursor='pointer' {...props} buttons={button} customClassname={"custom-input__wrapper_link"} isInvalid={isInvalid} readOnly />
	)
}

export default CustomInputAppItem
