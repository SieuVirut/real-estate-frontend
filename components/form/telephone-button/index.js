import { Component } from 'react'
import { Button } from 'antd'

class TelephoneButton extends Component {

  state = {
    showFull: false
  }

  onClick = () => {
    this.setState({
      showFull: !this.state.showFull
    })
  }

  getPhoneNumber = () => {
    const { phoneNumber } = this.props
    let text = phoneNumber || '0000000000000'
    if (!this.state.showFull) {
      text = text.substring(0, 4).concat(`xxx`)
    }
    return text
  }

  getContent = () => {
    const { phoneNumber } = this.props
    if (phoneNumber) {
      return <Button onClick={this.onClick} > {this.getPhoneNumber()} </Button>
    }
    return <Button ghost={true} > No Phone </Button>
  }

  render() {
    return this.getContent()
  }
}

export default TelephoneButton
