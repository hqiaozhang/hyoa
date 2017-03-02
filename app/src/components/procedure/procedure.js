/**
 *  @Author    zhanghq
 *  @DateTime  2017-02-22
 *  @describe  [流程管理]
 */

// 引入组件
import React, { Component } from 'react'


export default class ProcedureComponent extends Component{
  render(){
    
    var datas = [
      {
        type: '请假',
        startTime: '2017-1-5 9:30',
        endTime: '2017-1-5 9:30',
        reason: '外出办公',
        approval: '刘成',
        state: '待审批'
      },{
        type: '调休',
        startTime: '2017-1-5 9:30',
        endTime: '2017-1-5 9:30',
        reason: '外出办公',
        approval: '刘成',
        state: '待审批'
      },{
        type: '请假',
        startTime: '2017-1-5 9:30',
        endTime: '2017-1-5 9:30',
        reason: '外出办公',
        approval: '刘成',
        state: '待审批'
      }
    ]

    return (

        <div className='process-main'>
          <h5><i className='iconfont'>&#xe63f;</i>流程管理</h5>
          <ul className='query-criteria'>
              <li><span>流程类型</span>: 
                <select>
                  <option>请假</option>
                  <option>调休</option>
                </select>
              </li>
              <li><span>状态</span>: 
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
                <th>类型</th>
                <th>开始时间</th>
                <th>结束时间</th>
                <th>事由</th>
                <th>审批人</th>
                <th>状态</th>
                <th>操作</th>
              </tr>
              
              </thead>
              <tbody >
              {
                datas.map( (d, index) => {
                  return (
                    <tr key={index}>
                    <td>{(index+1)}</td>
                    <td>{d.type}</td>
                    <td>{d.startTime}</td>
                    <td>{d.endTime}</td>
                    <td>{d.reason}</td>
                    <td>{d.approval}</td>
                    <td>{d.state}</td>
                    <td className='operation'>
                      <span>操作</span>
                      <span>查看</span>
                      <span>修改</span>
                    </td>
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



