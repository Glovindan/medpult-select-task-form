import React, { PropsWithChildren, useState } from 'react'
import icons from '../../../../shared/icons'

interface FilterItemWrapperProps {
    title: string
}

/** Обертка панели фильтров */
export default function FilterItemWrapper({ title, children }: PropsWithChildren<FilterItemWrapperProps>) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggleIsOpen = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="filter-item-wrapper">
            <div className="filter-item-wrapper__header" onClick={toggleIsOpen}>
                <div className="filter-item-wrapper__title">{title}</div>
                <div className={`filter-item-wrapper__arrow ${isOpen ? "filter-item-wrapper__arrow_open" : null}`}>{icons.filterItemArrow}</div>
            </div>
            {isOpen && <div className="filter-item-wrapper__content">{children}</div>}
        </div>
    )
}