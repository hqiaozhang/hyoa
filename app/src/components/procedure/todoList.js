/**
 *  @Author    zhanghq
 *  @DateTime  2017-02-26
 *  @describe  [待办事项]
 */

import React, { Component } from 'react'

export default class TodoList extends Component{
  render(){
    let data = this.props.data
    return (
      <div className='todo-main'>
        <div className='top-title'>待办事项</div>
        <div className='todo-context'>
          {
            data.map( (d, i) =>{
              let type = d.type
              let style = ''
              let iconTxt = ''
              let typeTxt = ''
              
              switch(type){
                case 1:
                  style = 'over-time'
                  iconTxt = '加'
                  typeTxt = '加班申请'
                break;
                case 2:
                  style = 'leave'
                  iconTxt = '假'
                  typeTxt = '请假申请'
                break;
                case 3:
                  style = 'formal'
                  iconTxt = '正'
                  typeTxt = '转正申请'
                break;
                case 4:
                  style = 'dispatch '
                  iconTxt = '差'
                  typeTxt = '出差申请'
                break;

              }
              return (
                 <div className='todo-list' key={i}>
                  <div className='row'>
                     <i className={'icon ' + style}>{iconTxt}</i>
                    <div className='details'>
                        <h5>{typeTxt}</h5>
                        <p>{d.details}</p>
                    </div>
                    <div className='edit'><i className='iconfont edit-icon'>&#xe607;</i>审批</div> 
                  </div>
                  <div className='row'>
                    <div className='col'>
                      <p>当前步骤</p>
                      <p className='cur-step'>{d.curStep}</p>
                    </div>
                    <div className='col'>
                      <p>进展状态</p>
                      <p className='cur-state'>{d.curState}</p>
                    </div>
                  </div>
                </div>
              )
            })
          }
           
        </div>
    </div>
    )
  }
}