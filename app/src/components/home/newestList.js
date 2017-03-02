/**
 *  @Author    zhanghq
 *  @DateTime  2017-02-23
 *  @describe  [首页-公告列表]
 */

import React, { Component } from 'react'
import { Link } from 'react-router'

export default class NewestList extends Component {
  render() {
    var lists = this.props.lists
    return (
      <ul className='content'>
        {
          lists.map( (data, index) => {
            let id = data.id
            return (
              <Link to={`/index/notice/${id}`} key={index}><li>{data.title}<span>{data.time}</span></li></Link>
            )
          })
        }
      </ul>
    )
  }
}