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
        var lists = [

              {
                title: '团建活动通知：下午2点开始',
                time: '2017-01-07'
              },{
                title: '团建活动通知：下午2点开始',
                time: '2017-01-07'
              },{
                title: '团建活动通知：下午2点开始',
                time: '2017-01-07'
              },{
                title: '团建活动通知：下午2点开始',
                time: '2017-01-07'
              },{
                title: '团建活动通知：下午2点开始',
                time: '2017-01-07'
              }

        ]
        return (
            <div className='content-block'>
                <div className='header'>
                    <i className={this.props.data.icon}></i>
                    <span className={this.props.data.title}>{this.props.data.text}</span>
                    <span className='more'>更多>></span>
                </div>
                <div className='new-list'>
                    <NewestList  lists={lists} />
                </div>
            </div>
        )
    }
}