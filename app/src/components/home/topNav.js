/**
 *  @Author    zhanghq
 *  @DateTime  2017-02-23
 *  @describe  [首页-顶部导航]
 */

import React, { Component } from 'react'
import { Link } from 'react-router'


const styles = {
  ul: {
      listStyle: 'none'
  },
  lis: {
      float: 'left',
      marginRight: 60,
      textAlign: 'center'
  },
  span: {
    width: '100%',
    color: '#0a81ca',
    display: 'block'
  }

}

export default class TopNav extends Component {
 render(){
    var navs = this.props.navs
    console.log(navs)
    return (
      <ul style={styles.ul}>
      {
        navs.map( (navs) => {
          console.log(navs.url)
          return (
             <li style={styles.lis} key={navs.key} className={navs.iconName}>
                <i className='iconfont'></i><span style={styles.span}>{navs.value}</span> 
             </li>
          )
        })
      }
      </ul>
    )
  }
}
