/**
 *  @Author    zhanghq
 *  @DateTime  2017-02-22
 *  @describe  [公司公告-分页]
 */

import React, { Component } from 'react'

export default class NoticePage extends Component {
  render(){
    return (
      <div className='page'>
        <input type='button' value='上一页' />
        <input type='button' value='下一页' />
      </div>
    )
  }
}
