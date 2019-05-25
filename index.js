import { Component } from 'react'
import Head from 'next/head'
import { Layout } from 'antd'
import MyHeader from './components/header'
import MyFooter from './components/footer'
import { connect } from 'react-redux'
import { windowResize } from './lib/layout/actions'
import ReactDOM from 'react-dom'
import { checkSessionUserLogin } from './lib/account/actions'
import Router from 'next/router'
import './styles/layout.scss'

const { Header, Content, Footer } = Layout

class MyLayout extends Component {

  componentWillMount = () => {
    const { dispatch } = this.props
    dispatch(checkSessionUserLogin())
  }
  
  componentDidMount = () => {
    window.messagePopup = ReactDOM.findDOMNode(this.refs.messagePopup);

    this.handleResize()
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    window.messagePopup = undefined;
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  handleResize = () => {

    const size = {
      width: window.innerWidth,
      height: window.innerHeight,
    }
    const { dispatch } = this.props
    dispatch(windowResize(size))
  }

  render() {
    const { children } = this.props
    return (
      <div>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta charSet='utf-8' />
          <link rel='stylesheet' href='/_next/static/style.css' />
        </Head>
        <style jsx global>
          {``}
        </style>
        <Layout>
          <Header>
            <MyHeader />
            {/* VTODO: cap nhap lai menuTop khi user da dang nhap */}
          </Header>
          <Content>
            {children}
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            <MyFooter />
          </Footer>
        </Layout>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    layout: state.layout,
    userInfo: state && state.account && state.account.userInfo 
  }
}

export default connect(mapStateToProps)(MyLayout)
