
import { NOTICE_LIST,
  NOTICE_LIST_FAILURE,
  NOTICE_LIST_SUCCESS} from '../constants/actionType'
import assign from 'object-assign'

let initialState = {
  noticeList: []
}

export default function (state = initialState, action) {
  switch(action.type) {
    // case LOAD_NEW_LIST_REQUEST:
    //   return assign({}, state, {isFetching: true})
    case NOTICE_LIST_SUCCESS:
      return assign({}, state, {noticeList: action.response})
    case NOTICE_LIST_FAILURE:
      break;
   
    default:
      return state
  }
} 