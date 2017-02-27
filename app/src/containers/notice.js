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

function mapStateToProps (state) {
  console.log('当前state', state)
  return state.notice
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
    console.log('this.props.noticeList', this.props)
    let noticeList = this.props.noticeList
    return (
      <div className='notice-main'>
        <NoticeList lists={noticeList}/> 
        <NoticePage />
      </div>
    )
  }
}