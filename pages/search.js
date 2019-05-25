import React, { Component } from 'react'
import { withRouter } from 'next/router'
import Layout from '../index'
import fetch from 'node-fetch'
import MenuSearch from '../components/menu-search'
// import { resConfigs } from '../res-configs'
class Search extends Component {

  static async getInitialProps(props) {
    const q = withRouter(props).query.q || ''
    const res = await fetch(`${resConfigs.server}/api/v1/project-search?keyword="${q}"&page=1`)
    const json = await res.json()
    const data = json['data']
    return { data: data }
  }

  render() {

    return (
      <Layout>
        <MenuSearch />
        {/* <ListHouse data={this.props.data} /> */}
      </Layout>
    )
  }
}
export default Search
