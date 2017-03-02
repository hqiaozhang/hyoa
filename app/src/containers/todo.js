/**
 *  @Author    zhanghq
 *  @DateTime  2017-03-02
 *  @describe  [待办事项]
 */


import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/todo'
import { bindActionCreators } from 'redux'

import TodoList from '../components/procedure/todoList'

function mapStateToProps (state) {
  console.log('当前state', state)
  return state.todo
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actionCreators, dispatch) };
}

@connect(mapStateToProps, mapDispatchToProps)

export default class Procedure extends Component{

  componentDidMount() {
    const { loadTodoList } = this.props.actions
    loadTodoList()
  }

  render(){
    var data = this.props.todoList
    return (
      <TodoList  data={data} />
    )
  }
} 