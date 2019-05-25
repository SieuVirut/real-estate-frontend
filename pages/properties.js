import React, { Component } from 'react'
import { withRouter } from 'next/router'
import Layout from '../index'
import fetch from 'node-fetch'
import MenuSearch from '../components/menu-search'
import Statistic from '../components/form/statistic'
import FollowProject from '../components/follow'
import RegisterProperty from '../components/register-property'
import ListProperty from '../components/list-property'
import { Button, Icon, Popover } from 'antd'
import { connect } from 'react-redux'
import { fetchListCondos } from '../lib/condo/actions'
import { fetchListProperties } from '../lib/property/actions'
import '../styles/user-action.scss'
// import listProperty from '../components/list-property';

const userActions = (
  <div className='form-user-action'>
    <RegisterProperty />
    <FollowProject />
  </div>
)
class Condo extends Component {

  componentWillMount = () => {
    const { dispatch } = this.props
    dispatch(fetchListProperties())
  }

  componentDidMount = () => {

  }

  render() {
    const { listProperties } = this.props

    return (
      <Layout>
        <Statistic number={listProperties.length} />
        <MenuSearch />
        {userActions}
        <ListProperty data={listProperties} />
        <Popover
          content={userActions}
          className='btn-pin-right-bottom'
          placement='rightBottom'
          trigger='click'
        >
          <Icon type="paper-clip" />
        </Popover>
      </Layout>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userInfo: state && state.account && state.account.userInfo || {},
    listCondos: state && state.condos && state.condos.listCondos || [],
    listProperties: state && state.property && state.property.listProperty || []
  }
}

export default connect(mapStateToProps)(Condo)
