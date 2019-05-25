import { Component } from 'react'
import { Icon } from 'antd'
import { connect } from 'react-redux'
import { addFavoritesToProperty } from '../../../lib/activities/actions'

class Favorite extends Component {
  state = {
    step: 0,
    favorite: false
  }

  handleFavorite = () => {
    const { dispatch, propertyId } = this.props
    dispatch(addFavoritesToProperty(propertyId))
    this.setState({
      favorite: !this.state.favorite,
      step: this.state.step++
    })
  }

  isFavorites = () => {
    const { isFavorites } = this.props
    if (this.state.step === 0) {
      this.setState({
         favorite: isFavorites,
         step: 1
       })
      return isFavorites
    } 
    return this.state.favorite
  }
  
  render() {
    let color = this.isFavorites() ? 'red' : 'blue'
    return (
      <Icon
        type="heart"
        style={{ color: color }}
        onClick={this.handleFavorite}
      />
    )
  }

}

export default connect()(Favorite)
