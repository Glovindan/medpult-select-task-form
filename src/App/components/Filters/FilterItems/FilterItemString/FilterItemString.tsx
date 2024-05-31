import React, { PropsWithChildren, useState } from 'react'
import CustomInput from '../../../../../UIKit/CustomInput/CustomInput'
import FilterItemWrapper from '../FilterItemWrapper/FilterItemWrapper';

interface FilterItemStringProps {
	title: string
}

/** Обертка панели фильтров */
export default function FilterItemString({ title }: FilterItemStringProps) {

	return (
		<FilterItemWrapper title={title}>
			<CustomInput values={{ "test": "test" }} name={'test'} />
		</FilterItemWrapper>
	)
}