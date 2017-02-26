/**
 *  @Author    zhanghq
 *  @DateTime  2017-02-26
 *  @describe  [发布公告]
 */

import React, { Component } from 'react'

import SendContent from '../components/notice/sendContent'
import TitleCategory from '../components/notice/titleCategory'

export default class SendNotice extends Component{
  render(){
    return (
      <div className='send-notice'>
        <TitleCategory title='发布公告' className='iconfont notice-icon' />
        <SendContent />
      </div>
    )
  }
}