/**
 *  @Author    zhanghq
 *  @DateTime  2017-02-23
 *  @describe  [首页-公告列表]
 */

import React, { Component } from 'react'

export default class NewestList extends Component {
  render() {
    var lists = this.props.lists
    return (
      <ul className='content'>
        {
          lists.map( (data, index) => {
            return <li key={index}>{data.title}<span>{data.time}</span></li>
          })
        }
      </ul>
    )
  }
}