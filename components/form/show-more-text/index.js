import { Component } from 'react'
import ShowMoreText from 'react-show-more-text'

class ShowMoreTextCustom extends Component {

  getLines = () => {
    const { text, maxLength } = this.props
    if (text && text.length > maxLength) return 3
    return -1
  }

  render() {
    const { text, className } = this.props

    return (
      <ShowMoreText
        lines={this.getLines()}
        more='Xem thêm'
        less='Thu gọn'
        anchorClass={className}
        {...this.props}
      >
        {text}
      </ShowMoreText>
    )
  }
}

export default ShowMoreTextCustom
