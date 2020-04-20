import React, { Component } from 'react'
import CollectionItem from '../collection-item/CollectionItem'
import './previewCollection.style.scss'
import { withRouter } from 'react-router-dom'


export class PreviewCollections extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            width: 0
        }
    }

    handleResize = () => {
        this.setState({width: window.innerWidth})
    }

    componentDidMount = () => {
        this.setState({width: window.innerWidth})
        window.addEventListener('resize', this.handleResize);
    }
   
    componentWillUnmount = () => {
        window.removeEventListener('resize', this.handleResize)
    }

    render() {
        const { title, items, history, match} = this.props

        return (
            <div className = 'collection-preview'>
                <h1 className ='title' onClick={(e) => history.push(`${match.url}/${title.toLowerCase()}`)}> {title} </h1>
                <div className = 'preview'>
                {   
                    items.filter((item,index) => index < Math.floor(this.state.width/350) + 1) //amount of items depends on window width
                    .map((item) => (
                    <CollectionItem key={item.id} item={item} />
                ))}
                </div>
            </div>
        )
    }
}

export default withRouter(PreviewCollections) 


