
import { NOTICE_LIST,
  NOTICE_LIST_SUCCESS ,
  NOTICE_LIST_FAILURE, NOTICE_DETAILS_SUCCESS } from '../constants/actionType'
import assign from 'object-assign'

let initialState = {
  noticeList: [],
  noticeDetails: []
}

export default function (state = initialState, action) {
  switch(action.type) {
    case NOTICE_LIST_SUCCESS:
      return assign({}, state, {noticeList: action.response})
    case NOTICE_DETAILS_SUCCESS:
      return assign({}, state, {noticeDetails: action.response})  
    // case NOTICE_LIST_FAILURE:
    //   break;
    default:
      return state
  }
} 
