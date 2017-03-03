import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'

import RestComponent from '../components/info/rest'


export default class SurplusRest extends Component{
  render(){
    return (
  
      <RestComponent />
    
    )
  }
} 