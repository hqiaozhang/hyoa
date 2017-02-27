import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import user from './user'
import home from './home'
import notice from './notice'

const rootReducer = combineReducers({
  user,
  home,
  notice,
  
  routing: routerReducer
})

export default rootReducer
