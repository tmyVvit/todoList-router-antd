import React, { Component } from 'react';
import Filter from './Filter'
import * as fType from '../constant/filterType'
import { Menu } from 'antd';
export default class FilterGroup extends Component {
    render() {
        const {filter, onSetFilter} = this.props;
        return (
            <div>
                <Menu 
                theme="dark"
                mode="horizontal"
                style={{ lineHeight: '64px' }}
                >
                <Menu.Item>
                    <Filter
                        filter={fType.ALL}
                        filterName="All"
                        onSetFilter={onSetFilter}
                    /></Menu.Item>
                    <Menu.Item>
                    <Filter

                        filter={fType.ACTIVE}
                        filterName="Active"
                        onSetFilter={onSetFilter}
                    /></Menu.Item>
                    <Menu.Item>
                    <Filter
                        filter={fType.COMPLETE}
                        filterName="Complete"
                        onSetFilter={onSetFilter}
                    />
                    </Menu.Item>
                </Menu>
            </div>
        );
    }
}