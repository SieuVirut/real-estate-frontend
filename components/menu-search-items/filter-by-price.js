import React, { Component } from 'react'
import { Button, Popover, Slider } from 'antd'

const marks = {
  500: '500 trieu',
  1200: {
    style: {
      color: '#f50',
    },
    label: <strong>12 ty</strong>,
  },
}
class FilterByPrice extends Component {
  state = {
    visible: false,
    price: []
  }

  hide = () => {
    this.setState({
      visible: false,
    });
  }

  handleVisibleChange = (visible) => {
    this.setState({ visible });
  }

  onChangePrice = (price) => {
    this.setState({ price })
    return price
  }

  getTitleMenuPrice = (
    <div>
      <span> Chon muc gia </span>
      <Slider range min={500} max={1200} marks={marks} defaultValue={[500, 800]} onChange={this.onChangePrice} />
    </div>
  )

  getContentMenuPrice = (
    <div>
      <Button> Huy bo </Button>
      <Button> Loc ket qua </Button> 
      {/* need redux to save value */}
    </div>
  )

   getNameBtn = () => {
    const { price } = this.state 
    const name = price && price[0] && `${price[0]}tr-${price[1]}tr` || 'Muc gia'
    return name 
  }

  render() {
    return (
      <Popover
        content={this.getContentMenuPrice}
        title={this.getTitleMenuPrice}
        trigger="focus"
        visible={this.state.visible}
        onVisibleChange={this.handleVisibleChange}
      >
        <Button > {this.getNameBtn()} </Button>
      </Popover>
    )
  }
}

export default FilterByPrice
