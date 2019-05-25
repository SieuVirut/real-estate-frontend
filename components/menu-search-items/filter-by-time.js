import React, { Component } from 'react'
import { DatePicker } from 'antd'

const { RangePicker } = DatePicker


class FilterByTime extends Component {
  onChangeTime = (time) => {

  }

  render() {
    return (
      <RangePicker onChange={this.onChangeTime} />
    )
    
  }
}

export default FilterByTime
