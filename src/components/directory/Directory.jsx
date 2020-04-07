import React from 'react'
import MenuItem from '../menu-item/Menu-item'
import './directory.styles.css'
import {selectDirectorySections} from '../../redux/directory/directory.selectors'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

const Directory = ({sections}) => (

    <div className='directory-menu'>
        {sections.map(({id, ...otherSectionProps}) => (
            <MenuItem key={id} {...otherSectionProps} />))}
    </div>
) 

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
}) 

export default connect(mapStateToProps)(Directory)
