import React, { Component } from 'react'
import { Popconfirm, Button, Checkbox } from 'antd'
import CheckboxGroup from 'antd/lib/checkbox/Group';



class FilterAdvance extends Component {

  state = {
    type: [],
    direction: []
  }

  onConfirmFilter = (e) => {
  }

  onChangeType = (type) => {
    this.setState({ type })
  }

  onChangeDirection = (direction) => {
    this.setState({ direction })
  }

  renderFilterAdvance = (
    <div> Dang lam :D.
      <div className='type'>
        <span> Loai nha dat </span>
        <CheckboxGroup onChange={this.onChangeType}>
          <Checkbox value="1">Chung cu</Checkbox>
          <Checkbox value="2">Biet Thu</Checkbox>
          <Checkbox value="3">Nha Rieng</Checkbox>
        </CheckboxGroup>
      </div>
      <div className=''>
        <span> Can Ho: </span>

      </div>
      <div className='direction'>
        <span> Huong nha </span>
        <CheckboxGroup onChange={this.onChangeDirection}>
          <Checkbox value="1">Dong</Checkbox>
          <Checkbox value="2">Tay</Checkbox>
          <Checkbox value="3">Nam</Checkbox>
          <Checkbox value="4">Bac</Checkbox>
          <Checkbox value="5">Dong Nam</Checkbox>
          <Checkbox value="6">Dong Bac</Checkbox>
          <Checkbox value="7">Tay Bac</Checkbox>
          <Checkbox value="8">Tay Nam</Checkbox>
        </CheckboxGroup>
      </div>

    </div>
  )

  render() {
    return (
      <Popconfirm placement="topLeft" title={this.renderFilterAdvance} onConfirm={this.onConfirmFilter} okText="Yes" cancelText="No">
        <Button> Loc nang cao </Button>
      </Popconfirm>
    )
  }
}

export default FilterAdvance
