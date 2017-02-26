import * as actionType from '../constants/actionType'
import api from '../api/notice'

/**
 * 加载所有公司公告列表，先不分页，后面内容多了需要添加分页
 * 
 * @returns action
 */
export const loadNoticeList = () => {
  return {
    type: actionType.NOTICE_LIST,
    promise: api.getNoticeList()
  }
}

