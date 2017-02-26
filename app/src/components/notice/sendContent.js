/**
 *  @Author    zhanghq
 *  @DateTime  2017-02-26
 *  @describe  [发布公告-内容]
 */


import React, { Component } from 'react'

export default class SendContent extends Component{
  render(){
    return (
      <div className='send-content'>
        <table>
          <tbody>
            <tr>
              <td>标题：</td>
              <td><input type='text' className='title' /></td>
            </tr>
            <tr>
              <td>标签：</td>
              <td><input type='text' className='label' /></td>
            </tr>
            <tr>
              <td>正文：</td>
              <td><textarea rows="10" cols="30">
                    </textarea></td>
            </tr>
            <tr >
              <td className='fr'>
              
              <input type='button' value='发布' className='release' />
              <input type='button' value='取消' className='cancel' />  
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

