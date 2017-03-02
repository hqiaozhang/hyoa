import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import user from './user'
import home from './home'
import notice from './notice'
import todo from './todo'

const rootReducer = combineReducers({
  user,
  home,
  notice,
  todo,
  routing: routerReducer
})

export default rootReducer
