import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export default class Filter extends Component {
    render() {
        const {filter,  filterName, onSetFilter} = this.props;
        return (
           <Link
                to={`/${filter}`}
                data-filter={filter}
                // className={pageFilter===filter?"selected":""}
                onClick={()=>onSetFilter(filter)}
            >
            {filterName}
            </Link>

        );
    }
}