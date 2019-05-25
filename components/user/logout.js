import { Component } from 'react'
import Router from 'next/router'

class Logout extends Component {

  componentDidMount = () => {
    localStorage.removeItem('resUserToken')
    setTimeout(
      Router.push('/user/login'), 2000
    )

  }

  render() {
    return (
      <div> Ban vua dang xuat khoi he thong </div>
    )
  }
}

export default Logout
