import { Component } from 'react'
import { Card, Avatar } from 'antd'
import PropertyInfo from './property-info'
import { serverApiUrl } from '../../common/endpoint'
import FbPhotoGrid from '../fb-photo-grid'
import { getUrlImage } from '../../common/function'
import ShowMoreText from '../../components/form/show-more-text'
import { increaseViewProperty } from '../../lib/property/actions'
import { connect } from 'react-redux'
import '../../styles/list-property/property-items.scss'

const PropertyContents = ({ info }) => {
  if (!info) {
    // add component loading
    return <div />
  }

  let images = info.images || []
  let description = info.description || ''
  return (
    <div className='property-container'>
      <PropertyDescaption description={description} className='container-descaption-top' />
      <div className='container-info-bottom'>
        <ListImages images={images} className='container-left' />
        <PropertyInfo info={info} className='container-right' />
      </div>
    </div>
  )
}

const ListImages = ({ images, className }) => {
  return (
    <div className={className} >
      <FbPhotoGrid images={getUrlImage(images)} />
    </div>
  )
}

const PropertyDescaption = ({ description, className }) => {

  return (
    <div className={className}>
      <ShowMoreText text={description} maxLength={200} />
    </div>
  )
}
class PropertyItem extends Component {
  state = {
    canIncreaseView: true
  }

  onClickCard = (e) => {
    this.state.canIncreaseView && this.handleIncreaseView()
    this.setState({
      canIncreaseView: false
    })
  }

  handleIncreaseView = () => {
    const { dispatch, info } = this.props
    let propertyId = info && info.id
    dispatch(increaseViewProperty(parseInt(propertyId)))
    return
  }

  handleOk = e => {
    this.setState({
      visible: false
    })
  }

  handleCancel = e => {
    this.setState({
      visible: false
    })
  }

  propertyAuthor = (userInfo) => {
    const avatarUrl = serverApiUrl.concat(userInfo.avatar)
    return (
      <div>
        <Avatar
          shape='circle'
          size='small'
          isImgExist
          src={avatarUrl}
        />
        <span> {userInfo.name} </span>
      </div>
    )
  }

  render() {
    const { info } = this.props
    const userInfo = info && info.user && info.user || ''
    return (
      <div className='list-property-item'>
        <Card
          onClick={this.onClickCard}
          title={this.propertyAuthor(userInfo)}
        >
          <PropertyContents info={info} />
        </Card>
      </div>
    )
  }
}

export default connect()(PropertyItem)
