import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverviewContainer from '../../components/collections-overview/CollectionsOverview.container';
import CollectionContainer from '../collection-page/Collection.container';
import { connect } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

const Shop = ({ match, fetchCollectionsStart }) => {

	useEffect(() => {
		fetchCollectionsStart();
	}, [fetchCollectionsStart]);

	return (
		<div className="shop-page">
			<Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
			<Route path={`${match.path}/:collectionId`} component={CollectionContainer} />
		</div>
	);
};

const mapDispatchToProps = dispatch => ({
	fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
})

export default connect(null, mapDispatchToProps)(Shop);