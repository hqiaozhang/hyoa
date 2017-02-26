/**
 *  @Author    zhanghq
 *  @DateTime  2017-02-21
 *  @describe  [公司公告-右边列表]
 */

import React from 'react'
import { Component } from 'react'
import { Link } from 'react-router'

export default class NoticeList extends Component {
  render(){
    let lists = this.props.lists
    let style = {}
    return (
        <div className='notice-right'>
          <h2>公司公告</h2>
          <ul className='notice-list'>
          {
            lists.map( (data, index) => {
              let id = data.id
              index < 3 ? style = {} : style = { paddingLeft: '2%', width: '95.5%' }
              return (
                <Link to={`/index/notice/${id}`} key={index}>
                  <li style={style}>  
                    { index < 3 ? <div className="new-icon"></div> : '' }
                    <h4>{data.title}</h4>
                    <span className='time'>{data.time}</span>
                    <p>{data.content}</p>
                  </li>
                </Link>
              )
            })
          }
          </ul>
        </div>
    )
  }
}


