
import * as actionType from '../constants/actionType'
import api from '../api/todo'

/**
 * 加载所有待办事项，先不分页，后面内容多了需要添加分页
 * 
 * @returns action
 */
export const loadTodoList = () => {
  return {
    type: actionType.LOAD_TODO,
    promise: api.getTodoList()
  }
}
