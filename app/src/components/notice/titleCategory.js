/**
 *  @Author    zhanghq
 *  @DateTime  2017-02-26
 *  @describe  [发布公告-标题]
 */


import React, { Component } from 'react'

export default class TitleCategory extends Component{
  render(){
    return (
      <div className='title-category'><i className={this.props.className}></i><h5>{this.props.title}</h5></div>
    )
  }
}
