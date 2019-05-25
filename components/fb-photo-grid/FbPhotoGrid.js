import { Component } from 'react'
import FbImageLibrary from 'react-fb-image-grid'
import { getUrlImage } from '../../common/function'


class FbPhotoGrid extends Component {


  render() {
    const { images } = this.props
    return (
      <FbImageLibrary
        width={230}
        hideOverlay={false}
        images={images} />

    )
  }

}

export default FbPhotoGrid

