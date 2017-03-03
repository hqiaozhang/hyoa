/**
 *  @Author    zhanghq
 *  @DateTime  2017-02-22
 *  @describe  [流程管理]
 */

// 引入组件
import React, { Component } from 'react'


export default class RestComponent extends Component{
  render(){
    
    var datas = [
      {
        project: '浪潮',
        type: '周末加班',
        startTime: '2017-1-5 9:30',
        endTime: '2017-1-5 9:30',
        whenLong: 4,
        jobContent: '开发页面',
        state: '待审批'
      },{
        project: '浪潮',
        type: '周末加班',
        startTime: '2017-1-5 9:30',
        endTime: '2017-1-5 9:30',
        whenLong: 4,
        jobContent: '开发页面',
        state: '待审批'
      },{
        project: '浪潮',
        type: '周末加班',
        startTime: '2017-1-5 9:30',
        endTime: '2017-1-5 9:30',
        whenLong: 4,
        jobContent: '开发页面',
        state: '待审批'
      }
    ]

    return (

        <div className='process-main'>
          <h5><i className='iconfont'>&#xe63f;</i>剩余调休时间</h5>
          <ul className='query-criteria'>
              <li><span>项目：</span> 
                <select>
                  <option>浪潮</option>
                  <option>迪爱斯</option>
                </select>
              </li>
              <li><span>加班类型：</span>
                <select>
                  <option>待审批</option>
                  <option>待审批</option>
                </select>
              </li>
          </ul>

          <div className='query-content-list'>
              <table  width='100%'>
              <thead >
              <tr>
                <th>序号</th>
                <th>项目</th>
                <th>事由</th>
                <th>开始时间</th>
                <th>结束时间</th>
                <th>加班时长</th>
                <th>工作内容</th>
                <th>状态</th>
              </tr>
              
              </thead>
              <tbody >
              {
                datas.map( (d, index) => {
                  return (
                    <tr key={index}>
                    <td>{(index+1)}</td>
                    <td>{d.project}</td>
                    <td>{d.type}</td>
                    <td>{d.startTime}</td>
                    <td>{d.endTime}</td>
                    <td>{d.whenLong}</td>
                    <td>{d.jobContent}</td>
                    <td>{d.state}</td>
                  </tr>
                  )
                })
              }
              
              
              </tbody>
              </table>
          </div>

        </div>
   

    )
  }
}



