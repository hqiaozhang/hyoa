import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'
import configureStore from 'src/store/configureStore'
import { redirectToBack, redirctToLogin } from '../src/util/authUtil'

import Home from 'src/containers/home'
import DefaultIndex from 'src/containers/default'
import NewsList from 'src/containers/newsList'
import Login from 'src/containers/login'
import NewDetail from 'src/containers/newDetail'
import Notice from 'src/containers/notice'  //公告列表
import NoticeComtent from 'src/containers/noticeContent' //公告内容
import SendNotice from 'src/containers/sendNotice' //发布公告


/**
 * 所有路由信息
 * 控制台报如下错误：Warning: Failed propType: Invalid prop `component` supplied to `Route`.
 * 原因：组件内容为空，或import 和 export default / module.exports 和 require没有匹配
 * @export
 * @param {any} history
 * @returns 路由组件
 */
export default function(history) {
  return (
    <Router history={history}>
      <Route path="/" component={DefaultIndex}>
        <Route path="login" component={Login} onEnter={redirectToBack} />
        <Route path="logout" component={Login} />
        <Route path="index" component={Home} onEnter={redirctToLogin}>
          <Route path="notice" component={Notice} />
          <Route path="sendnotice" component={SendNotice} />
          <Route path="notice/:id" component={NoticeComtent} />
          <Route path="list" component={NewsList} />
          <Route path="list/:id" component={NewDetail} />
          
        </Route>
        <IndexRoute component={Login} onEnter={redirectToBack} />
      </Route>
    </Router>
  )
}