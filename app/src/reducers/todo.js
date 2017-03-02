/**
 *  @Author    zhanghq
 *  @DateTime  2017-03-02
 *  @describe  [流程管理]
 */

import { LOAD_TODO_SUCCESS } from '../constants/actionType'
import assign from 'object-assign'

let initialState = {
  todoList: []
}

export default function (state = initialState, action) {
  switch(action.type) {
    case LOAD_TODO_SUCCESS:
      return assign({}, state, {todoList: action.response})
    default:
      return state
  }
} 