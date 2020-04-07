import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import PreviewCollection from '../preview-collection/PreviewCollections'
import {selectCollections} from '../../redux/shop/shop.selectors'

import './collectionsOverview.styles.scss'

const CollectionsOverview = ({collections}) => (
    <div className='collections-overview'>
        {
            collections.map(({ id, ...otherCollectionProps}) => (
                <PreviewCollection key={id} {...otherCollectionProps} />
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(CollectionsOverview)