import React, { Component } from 'react'
import NewestList from './newestList'

/**
 * 
 * 
 * @class Content
 * @extends {Component}
 */
export default class Content extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let newList = this.props.data.newList
   
        return (
            <div className='content-block'>
                <div className='header'>
                    <i className={this.props.data.icon}></i>
                    <span className={this.props.data.title}>{this.props.data.text}</span>
                    <span className='more'>更多>></span>
                </div>
                <div className='new-list'>
                    <NewestList  lists={newList} />
                </div>
            </div>
        )
    }
}