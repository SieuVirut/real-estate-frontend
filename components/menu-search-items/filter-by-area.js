import React, { Component } from 'react'
import { Button, Popover, Slider } from 'antd'

const marks = {
  120: '120 m2',
  500: {
    style: {
      color: '#f50',
    },
    label: <strong>500 m2</strong>,
  },
}
class FilterByArea extends Component {
  state = {
    visible: false,
    area: []
  }

  hide = () => {
    this.setState({
      visible: false,
    });
  }

  handleVisibleChange = (visible) => {
    this.setState({ visible });
  }

  onChangeArea = (area) => {
    this.setState({ area })
    return area
  }

  getTitleMenuArea = (
    <div>
      <span> Khoang dien tich </span>
      <Slider range min={120} max={500} marks={marks} defaultValue={[120, 200]} onChange={this.onChangeArea} />
    </div>
  )

  getContentMenuArea = (
    <div>
      <Button> Huy bo </Button>
      <Button> Loc ket qua </Button>
      {/* need redux to save value */}
    </div>
  )

  getNameBtn = () => {
    const { area } = this.state
    const name = area && area[0] && `${area[0]} m2-${area[1]}m2` || 'Dien tich'
    return name
  }

  render() {
    return (
      <Popover
        content={this.getContentMenuArea}
        title={this.getTitleMenuArea}
        trigger="focus"
        visible={this.state.visible}
        onVisibleChange={this.handleVisibleChange}
      >
        <Button > {this.getNameBtn()} </Button>
      </Popover>
    )
  }
}

export default FilterByArea
