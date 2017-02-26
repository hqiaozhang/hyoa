/**
 *  @Author    zhanghq
 *  @DateTime  2017-02-24
 *  @describe  [公司公告]
 */

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/notice'
import { bindActionCreators } from 'redux'

import NoticeList from '../components/notice/noticeList'
import NoticePage from '../components/notice/noticePage'



let noticeData = [
  {
    title: '关于春节放假的通知',
    time: '2017-01-23',
    content: '为方便小伙伴们更好的安排春节假期人，公司决定调整放假具体如',
    id: '001'
  },{
    title: '关于春节放假的通知',
    time: '2017-01-23',
    content: '为方便小伙伴们更好的安排春节假期人，公司决定调整放假具体如',
    id: '002'
  },{
    title: '关于春节放假的通知',
    time: '2017-01-23',
    content: '为方便小伙伴们更好的安排春节假期人，公司决定调整放假具体如',
    id: '003'
  },{
    title: '关于春节放假的通知',
    time: '2017-01-23',
    content: '为方便小伙伴们更好的安排春节假期人，公司决定调整放假具体如',
    id: '004'
  },{
    title: '关于春节放假的通知',
    time: '2017-01-23',
    content: '为方便小伙伴们更好的安排春节假期人，公司决定调整放假具体如'
  },{
    title: '关于春节放假的通知',
    time: '2017-01-23',
    content: '为方便小伙伴们更好的安排春节假期人，公司决定调整放假具体如'
  }
]


function mapStateToProps (state) {
  console.log('当前state', state)
  return { items: state.home.items }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actionCreators, dispatch) };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Notice extends Component {
  componentDidMount() {
    const { loadNoticeList } = this.props.actions
    loadNoticeList()
  }

  render(){
    console.log('this.props.items', this.props)
    return (
      <div className='notice-main'>
        <NoticeList lists={noticeData}/> 
        <NoticePage />
      </div>
    )
  }
}