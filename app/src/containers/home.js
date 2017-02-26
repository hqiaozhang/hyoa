import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Dropzone from 'react-dropzone'
import { loadNavs, uploadUserInfo } from '../actions/home'
import { localLogin, logout } from '../actions/user'
import Navs from '../components/home/nav'
import Header from '../components/home/header'
import Content from '../components/home/content'
import TopNav from '../components/home/topNav'

const styles = {
  a: {
    color: '#ccc'
  },
  out: {
    position: 'absolute',
    top: '45px',
    left: '260px',
    color: 'red',
    cursor: 'pointer'
  },
  fileSelect: {
    width: '700px',
    textAlign: 'center',
    paddingTop: '150px',
    background: 'azure',
    color: 'brown',
    border: '2px dashed rgb(102, 102, 102)',
    height: '200px',
    borderRadius: '5px'
  }
}

function mapStateToProps(state) {
  //debugger
  return {
    items: state.home.items,
    navs: state.home.navs
  }
}

@connect(mapStateToProps, { loadNavs, logout, uploadUserInfo })
export default class Home extends Component {
  constructor(props) {
    super(props)
    // this.userSignOut = this.userSignOut.bind(this)
    this.uploadFile = this.uploadFile.bind(this)
  }

  componentDidMount() {
    this.props.loadNavs()
  }

  uploadFile(acceptedFiles, rejectedFiles) {

    let form = new FormData()
    form.append('file', acceptedFiles[0])

    this.props.uploadUserInfo(form)
  }

  render() {
    let navs = this.props.navs
    let notice = {
      text: '最新公告',
      icon: 'notice-icon',
      title: 'notice-text'
    }

    let book = {
      text: '图书信息',
      icon: 'book-icon',
      title: 'book-text'
    }
    
      return (
        <div className='container'>
          <div className='header-container'>
            <Header logout={this.props.logout}/>
          </div>
          
          <div className='navs-container'>
            <Navs clickLi={this.toggleNav} navs={navs} />
          </div>
          <div className='contents-container'>
              {
                this.props.children ? this.props.children
                  :
                  <div className='sub-content'>
                     <div className='top-nav'>
                        <TopNav navs={navs} />
                      </div>
                      <div className='notice'>
                        <Content data={notice} />
                      </div>
                      <div className='book'>
                        <Content data={book} />
                      </div>
                      <div className='project'>
                        <div className='title'>项目动态<span>更多>></span></div>
                        <div className='list'></div>
                      </div>
                    
                    <div style={{display: 'none'}}>
                      <Dropzone style={styles.fileSelect} accept='image/*, application/*' onDrop={this.uploadFile}>
                        <div>Try dropping some files here, or click to select files to upload</div>
                      </Dropzone>
                      <Link style={styles.a} to='index/list'>列表项</Link>
                    </div>
                  </div>
              }
            </div>
        </div>
      )
  }
}
