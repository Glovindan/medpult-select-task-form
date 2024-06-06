import React, { useEffect, useRef, useState } from 'react'
import CustomListColumn from './CustomListHeaderColumn/CustomListHeaderColumn'
import Loader from '../Loader/Loader'
import CustomListRow from './CustomListRow/CustomListRow'
import { FetchData, ListColumnData, SortData, getDetailsLayoutAttributes } from './CustomListTypes'

type ListProps = {
	/** Основные настройки */
	/** Настройки отображения колонок */
	columnsSettings: ListColumnData[]
	/** Получение данных */
	getDataHandler: (page: number, sortData?: SortData, searchData?: any) => Promise<FetchData>
	/** Есть прокрутка? */
	isScrollable?: boolean
	/** Высота */
	height?: string;
	/** Ширина списка в пикселях */
	listWidth?: number;

	/** Настройки поиска */
	/** Данные поиска */
	searchData?: any
	/** Установка обработчика нажатия на поиск */
	setSearchHandler?: any

	/** Получение формы детальной информации по вкладке */
	getDetailsLayout?: ({ rowData, onClickRowHandler }: getDetailsLayoutAttributes) => any
}

/** Список данных в виде таблицы */
function CustomList(props: ListProps) {
	const { height = "100%", listWidth, columnsSettings, getDataHandler, searchData, setSearchHandler, isScrollable = true, getDetailsLayout } = props;

	const [page, setPage] = useState<number>(0);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [hasMore, setHasMore] = useState<boolean>(true);
	const [sortData, setSortData] = useState<SortData>();
	const [items, setItems] = useState<any[]>([]);
	const [openRowIndex, setOpenRowIndex] = useState<number>();
	const bodyRef = useRef<HTMLDivElement>(null);
	const headerRef = useRef<HTMLDivElement>(null);

	const reloadData = () => {
		setIsLoading(false);
		setItems([])

		loadData();
	}

	useEffect(() => {
		console.log(items);
	}, [items])

	useEffect(() => {
		bodyRef.current?.addEventListener("scroll", () => {
			if (!bodyRef.current) return;
			if (!headerRef.current) return;
			headerRef.current.scrollLeft = bodyRef.current.scrollLeft;
		})
	}, [])

	const loadData = async (items: any[] = [], page: number = 0, hasMore: boolean = true) => {
		if (isLoading) return;
		if (!hasMore) return;

		setIsLoading(true);

		const fetchData = await getDataHandler(page, sortData, searchData);
		setHasMore(fetchData.hasMore)

		setItems([...items, ...fetchData.data])
		setPage(page + 1);
		setIsLoading(false);
	}

	const onScroll = () => {
		const body = bodyRef.current!;
		const height = body.scrollHeight - body.offsetHeight;
		const scrollPosition = body.scrollTop;

		if ((height - scrollPosition) / height < 0.05 && !isLoading) {
			loadData(items, page, hasMore)
		}
	}

	/** Установить обработчик нажатия на кнопку поиск */
	useEffect(() => {
		if (!setSearchHandler) return;

		setSearchHandler(() => () => { reloadData() });
	}, [searchData])

	/** Обновление оглавления при изменении сортировки */
	useEffect(() => {
		reloadData();
	}, [sortData])

	/** Нажатие на сортировку */
	const handleSortClick = (sortDataNew: SortData | undefined) => {
		setSortData(sortDataNew);
	}

	/** Получение ширины скроллбара */
	const getScrollbarWidth = (ref: React.RefObject<HTMLDivElement>) => {
		const element = ref.current;
		if (!element) return 0;

		return element.offsetWidth - element.clientWidth;
	}

	return (
		<div className='custom-list'>
			<div
				className={
					isScrollable
						? "custom-list__header custom-list__header_scrollable"
						: "custom-list__header"
				}
				ref={headerRef}
			>
				<div style={listWidth ? { width: `${listWidth - getScrollbarWidth(headerRef)}px` } : {}}>
					{columnsSettings.map(columnSettings =>
						<CustomListColumn
							sortData={sortData}
							handleSortClick={handleSortClick}
							{...columnSettings}
						/>
					)}
				</div>
			</div>
			<div
				className={
					isScrollable
						? "custom-list__body_scrollable"
						: "custom-list__body"
				}
				style={{ height: height }}
				ref={bodyRef}
				onScroll={onScroll}
			>
				<div className='custom-list__body-wrapper' style={listWidth ? { width: `${listWidth - getScrollbarWidth(bodyRef)}px` } : {}}>
					{items.map(data => {
						/** Обработчик нажатия на строку */
						const toggleShowDetails = () => {
							if (data.id === undefined) return;

							if (data.id === openRowIndex) {
								setOpenRowIndex(undefined)
								return
							}

							setOpenRowIndex(data.id)
						}

						return <CustomListRow
							key={data.id}
							data={data}
							columnsSettings={columnsSettings}
							getDetailsLayout={getDetailsLayout}
							isShowDetails={getDetailsLayout && data.id === openRowIndex}
							setOpenRowIndex={toggleShowDetails}
							reloadData={reloadData}
						/>
					})}
					{isLoading && <Loader />}
				</div>
			</div>
		</div>
	)
}

export default CustomList
