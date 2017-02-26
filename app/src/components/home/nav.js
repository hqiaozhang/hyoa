import React, { Component } from 'react'
import { filter } from 'lodash'
import { Link } from 'react-router'

export default class Nav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentSubItems: {}
        }
        this.handleClick = this.handleClick.bind(this)
        this.changeParentBg = this.changeParentBg.bind(this)
        this.resetParentBg = this.resetParentBg.bind(this)
        this.handleSubClick = this.handleSubClick.bind(this)
    }

    changeParentBg() {
        this.setState({
            parentBg: '#26354c'
        })
    }

    resetParentBg() {
        this.setState({
            parentBg: ''
        })
    }
    handleClick(id) {
        console.log(id)
        let current = filter(this.props.navs, function(nav) {
            return nav.key == id
        })
        
        console.log(this.state.currentId, id)
        this.setState({
            showItem: this.state.currentId == id ? !this.state.showItem : true,
            currentId: id,
            currentSubItems: current[0]
        })
        
        //this.props.clickLi()
    }

    handleSubClick(evt) {
        evt.preventDefault()
        evt.stopPropagation()
    }

    render() {
        console.log(this.state)
        let navs = this.props.navs
        let len = this.state.currentSubItems.children ? 55 + this.state.currentSubItems.children.length * 27 : 55
        return (
            <div className='navs'>
                <div className='logo-title'>
                    <i className='logo'></i>
                    <span>海云数据</span>
                </div>

                <div className='person-info'>
                    <i className='header-png'></i>
                    <div className='name-position'>
                        <span className='name'>白占宁</span>
                        <span className='position'>前端开发工程师</span>
                    </div>
                </div>
                
                <ul className='nav-list'>
                    {
                        navs.map( nav => {
                            return <li style={{height: this.state.showItem && nav.key == this.state.currentSubItems.key ? len : 55,
                                    background: this.state.parentBg}} 
                                onClick={(id) => this.handleClick(nav.key)} key={nav.key}>
                                <i className={'iconfont nav-icon-' + nav.iconName}></i>
                                {
                                    nav.url ?
                                        <Link to={nav.url}>{nav.value}</Link>
                                    :
                                        nav.value
                                }
                                {   
                                    nav.children ? 
                                        <span className='pull'>></span>
                                    :
                                        ''
                                }
                                {
                                    nav.children && nav.key == this.state.currentSubItems.key ?
                                        <ul style={{display: !this.state.showItem ? 'none' : 'block'}}>
                                            {
                                                nav.children.map( cld => {
                                                    return <li onMouseEnter={this.changeParentBg} 
                                                        onMouseLeave={this.resetParentBg}
                                                        onClick={this.handleSubClick}
                                                        className='sub-item' key={cld.key}>
                                                            <Link to={cld.url}>{cld.value}</Link>
                                                        </li>
                                                })
                                            }
                                        </ul>
                                    :
                                        ''  
                                }
                            </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}