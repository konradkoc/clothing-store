import React from 'react'
import CollectionsOverview from '../../components/collectionsOverview/CollectionsOverview'
import { Route } from 'react-router-dom'
import CollectionPage from '../../pages/collection/CollectionPage'

const ShopPage = ({match}) =>{ 
  console.log(match)

  return (
    <div className='shop-page' style = {{padding: '1rem'}}>
      <Route exact path = {`${match.path}`} component={CollectionsOverview} />
      <Route path = {`${match.path}/:collectionId`} component = {CollectionPage} />
    </div>
)

}

export default ShopPage