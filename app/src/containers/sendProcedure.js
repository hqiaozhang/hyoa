/**
 *  @Author    zhanghq
 *  @DateTime  2017-02-26
 *  @describe  [发布公告]
 */

import React, { Component } from 'react'

import TitleCategory from '../components/notice/titleCategory'
import SendContent  from '../components/procedure/sendContent'

export default class SendProcedure extends Component{
  render(){
    return (
      <div className='send-notice send-procedure'>
        <TitleCategory title='发起新流程' className='iconfont notice-icon' />
        <SendContent />
      </div>
    )
  }
}