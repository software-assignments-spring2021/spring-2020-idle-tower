import React, { useState, useEffect } from 'react';
import Pagination from "react-js-pagination";
import './restaurant-list.scss';

import InfoBox from './info-box.js';

const RestaurantList = (props) => {
	const data = props.response;
	const saved = props.saved;
	const loading_obj = {'name': 'Loading', 'address': 'Loading', 'review_count': 0};
	const loading_infobox = <InfoBox key='loading' data={loading_obj} number='1' />

	const [rows, setRows] = useState([loading_infobox]);
	useEffect(() => {
		if (data !== 0) {
			const tempRows = []
			//
			for(var obj of data) {
				tempRows.push(<InfoBox
					key={obj.business_id}
					data={obj}
					number={tempRows.length+1}
					saved={saved} />);
			}
			setRows(tempRows);
		}
	}, [data, saved]);



	// Pagination
	const [activePage, setActivePage] = useState(1);

	function handlePageChange(pageNumber) {
		setActivePage(pageNumber);
	}
	
	const [pagination, setPagination] = useState(null);
	const [visibleRows, setVisibleRows] = useState(rows.slice(0, 5));
	const ITEMS_COUNT_PER_PAGE = 5
	useEffect(() => {
		const pagination = (
			<Pagination
				activePage={activePage}
				itemsCountPerPage={ITEMS_COUNT_PER_PAGE}
				totalItemsCount={rows.length}
				pageRangeDisplayed={5}
				onChange={handlePageChange.bind(this)}
				hideFirstLastPages
			/>
		)
		setPagination(pagination)
		setVisibleRows(rows.slice(ITEMS_COUNT_PER_PAGE*(activePage-1), ITEMS_COUNT_PER_PAGE*(activePage-1)+5));
	}, [rows, activePage])


	return (
		<div className="RestaurantList">
			{ visibleRows.map(InfoBox => <div> {InfoBox} </div>) }
			<br />
			{ pagination }
		</div>
	)
}

export default RestaurantList;