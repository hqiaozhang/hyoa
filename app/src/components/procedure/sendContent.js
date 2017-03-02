/**
 *  @Author    zhanghq
 *  @DateTime  2017-02-26
 *  @describe  [发起流程]
 */

import React, { Component } from 'react'

let textarea = {
  width: 330,
  height: 80
}

export default class SendContent extends Component{
  render(){
    return (
      <div className='send-content'>
        <table>
          <tbody>
            <tr>
              <td>流程类型：</td>
              <td>请假 调休 加班</td>
            </tr>
            <tr>
              <td>时间范围：</td>
              <td className='time-frame'><input type='text' className='label' /> 至 <input type='text' className='label' /></td>
            </tr>
            <tr>
              <td>具体原因：</td>
              <td><textarea rows="10" cols="30" style={textarea}>
                    </textarea></td>
            </tr>
            <tr>
              <td>人力资源审批：</td>
              <td>
                <select>
                  <option>方静</option>
                  <option>王熙</option>
                </select>
              </td>
            </tr>
             <tr>
              <td>组长审批：</td>
              <td>
                <select>
                  <option>方静</option>
                  <option>王熙</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>项目经理审批：</td>
              <td>
                <select>
                  <option>马毅才</option>
                  <option>徐颖</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>是否紧急：</td>
              <td>
                <span> 是<input type='radio' name='yes' /></span>
                <span> 否<input type='radio' name='yes' /></span>
              </td>
            </tr>
            <tr>
              <td>&nbsp;</td>
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