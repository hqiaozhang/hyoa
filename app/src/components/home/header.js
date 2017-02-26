import React, { Component } from 'react'

/**
 * 
 * 
 * @export
 * @class Header
 * @extends {Component}
 */
export default class Header extends Component {
    /**
     * 
     * 
     * @returns
     * 
     * @memberOf Header
     */
    render() {
        return (
            <header className='header'>
                <h2>海云数据OA办公系统</h2>
                <a>
                    <i className='system-icon iconfont'></i>
                    <span className='system-text '>系统管理</span>
                </a>

                <a onClick={() => this.props.logout()}>
                    <i className='quit-icon iconfont'></i>
                    <span className='quit-text'>退出系统</span>
                </a>
            </header>
        )
    }
}