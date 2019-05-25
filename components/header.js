import { Component } from 'react'
import Meta from './meta'
import Link from 'next/link'
import FormSearch from '../components/form/search'
import { connect } from 'react-redux'
import '../styles/header.scss'

class MyHeader extends Component {

  getUserName = () => {
    const { userInfo } = this.props
    if (!userInfo) return 'Guess'
    return userInfo && userInfo.email || 'Undefine'
  }

  headerHaveUser = () => {

    return (
      <div className='res-header'>
        <Meta />
        <div className='res-menu'>
          <div className='res-header-menu-left'>
            <Link href='/'>
              <img className='res-logo' src='#' />
            </Link>
            {/* <FormSearch /> */}
          </div>
          <div className='res-header-menu-right'>
            <span> Hi,{this.getUserName()}</span>
            <Link href='/user/logout'>
              Đăng xuất
        </Link>
          </div>
        </div>
      </div>
    )
  }

  headerNoUser = () => {
    return (
      <div className='res-header'>
        <Meta />
        <div className='res-menu'>
          <div className='res-header-menu-left'>
            <Link href='/'>
              <img className='res-logo' src='#' />
            </Link>
            {/* <FormSearch /> */}
          </div>
          <div className='res-header-menu-right'>
            <Link href='/timmoigioi'>
              Tìm môi giới
      </Link>
            <Link href='/news'>
              Tin tức
      </Link>
            <Link href='/help'>
              Trợ giúp
      </Link>
            <Link href='/user/login'>
              Đăng nhập
      </Link>
            <Link href='/user/register'>
              Đăng kí
      </Link>
          </div>
        </div>
      </div>
    )
  }

  getHeader = () => {
    const { userInfo } = this.props
    if (userInfo && !userInfo.email) return this.headerNoUser()
    return this.headerHaveUser()
  }
  render() {
    return this.getHeader()
  }
}

const mapStateToProp = (state) => {
  return {
    userInfo: state && state.account && state.account.userInfo || [],

  }
}

export default connect(mapStateToProp)(MyHeader)