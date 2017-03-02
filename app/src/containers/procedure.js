/**
 *  @Author    zhanghq
 *  @DateTime  2017-03-02
 *  @describe  [流程管理]
 */


import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/notice'
import { bindActionCreators } from 'redux'

import ProcedureComponent from '../components/procedure/procedure'


export default class Procedure extends Component{
  render(){
    return (
  
      <ProcedureComponent />
    
    )
  }
} 