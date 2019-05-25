import { Component } from 'react'
import { Avatar } from 'antd'
import { serverApiUrl } from '../../common/endpoint'
import '../../styles/list-images.scss'

const path = require('path')

class ListImage extends Component {

  render() {
    const { images } = this.props
    let data = []

    const listImage = images && images.length > 0 && images.filter((v, i) => images.indexOf(v) === i) || {}

    listImage.length > 0 && listImage.map(item => {
      for (let i = 0; i < item.length; i++) {
        let imageUrl = item[i]['imageUrl']
        // let url = path.join(serverApiUrl, imageUrl)
        let url = serverApiUrl.concat(`/${imageUrl}`)
        data.push(
          <Avatar shape="square" size={64} src={url} />
        )
      }
    })
    return (
      <div className='list-images'>
        {data}
      </div>
    )
  }
}

export default ListImage