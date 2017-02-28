/**
 *  @Author    zhanghq
 *  @DateTime  2017-02-26
 *  @describe  [公告内容]
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/notice'
import { bindActionCreators } from 'redux'

var data = {
  title: '关于春节放假的通知',
  time: '2017-01-07',
  content: '为方便小伙伴们更好的安排春节假期人，公司决定调整放假具体如下 为方便小伙伴们更好的为方便小伙伴们更好的安排春节假期人，公司决定调整放假具体如下 为方便小伙伴们更好的安排春节假期人，公司决定调整放假具体如下安排春节假期人，公司决定调整放假具体如下'
}

function mapStateToProps (state) {
  console.log('当前state', state)
  return { notice: state.notice }
}


function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actionCreators, dispatch) };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class NoticeComtent extends Component{
  componentDidMount() {
    let { id } = this.props.params
    const { loadNoticeDetails } = this.props.actions
    console.log('当前id', id)
    loadNoticeDetails(id)
  }

  render(){
    let data = this.props.notice.noticeDetails
    console.log('this.props', this.props)
    return (
      <div className='notice-content'>
        <div className='title'>
          <h3>{data.title} </h3>
          <p className='time'>{data.time}</p>
        </div>
        <div className='details-content'>
            {data.content}
        </div>
          
      </div>
    )
  }
}