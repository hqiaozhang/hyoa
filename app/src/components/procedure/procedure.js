/**
 *  @Author    zhanghq
 *  @DateTime  2017-02-22
 *  @describe  [流程管理]
 */

// 引入组件
import React, { Component } from 'react'


export default class ProcedureComponent extends Component{
  render(){
    
    return (

          <div className='process-main'>

            <h4><i className='iconfont'>&#xe63f;</i>流程管理</h4>
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
                <table  width='100%' border="0" cellspacing="0" cellpadding="0">
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
                <tr>
                  <td>1</td>
                  <td>请假</td>
                  <td>2017-1-5 9:30</td>
                  <td>2017-1-5 9:30</td>
                  <td>外出办公</td>
                  <td>刘成</td>
                  <td>待审批</td>
                  <td>修改</td>
                </tr>
                
                </tbody>
                </table>
            </div>

          </div>
   

    )
  }
}



