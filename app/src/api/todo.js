require('es6-promise').polyfill()
import axios from 'axios'
import baseConfig from '../../../config'
import reqURL from '../constants/requestURL'

const { LOAD_TODO_URL} = reqURL


/**
 * 使用axios调用后台接口，所有请求的方法暂时都放这里
 * @autor zhanghq
 */

export default {
    /**
   * 查询所有待办事项，暂时不分页
   * @param {}
   * @returns promise对象，调用then方法后，获取查询到的数据
   */
  getTodoList: function(data) {
     return axios.get(LOAD_TODO_URL, data)
  }

}