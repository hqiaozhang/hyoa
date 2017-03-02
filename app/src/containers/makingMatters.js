/**
 *  @Author    zhanghq
 *  @DateTime  2017-03-02
 *  @describe  [流程管理]
 */


import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/notice'
import { bindActionCreators } from 'redux'

import TitleCategory from '../components/notice/titleCategory'

export default class MakingMatters extends Component{
  render(){
    return (
      <div className='send-notice'>
        <TitleCategory title='办结事项' className='iconfont notice-icon' />
      </div>
    )
  }
} 