import React, { Component } from 'react'

class BuildingDetail extends Component {

  render() {
    const { info, className } = this.props
    return (
      <div> This is Build Ding defaul: {info.id} </div>
    )
  }
}

export default BuildingDetail
