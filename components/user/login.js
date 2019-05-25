
import { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd'
import { connect } from 'react-redux'
import Link from 'next/link'
import Router from 'next/router'
import { fetchUserInfo } from '../../lib/account/actions'
import 'antd/dist/antd.css'
import './login.scss'

const FormItem = Form.Item

class NormalLoginForm extends Component {

	componentWillMount = async () => {
		const { account } = this.props
		const token = await this.getUserToken()
		const userId = account && account.userInfo && account.userInfo.id
		if (userId || token) Router.push('/properties')
	}

	componentDidUpdate = async () => {
		const { account } = this.props
		const userId = account && account.userInfo && account.userInfo.id
		const token = await this.getUserToken()
		if (userId || token) Router.push('/properties')
	}

	getUserInfo(values) {
		const { dispatch } = this.props
		dispatch(fetchUserInfo(values))
	}

	getUserToken = async () => {
		let token
		try {
			token = await localStorage.getItem('resUserToken')
		} catch (err) {
			console.log(err)
		}
		return token
	}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.form.validateFields((err, values) => {
			if (err) return
			this.getUserInfo(values)
		})
		return
	}

	render() {
		const { getFieldDecorator } = this.props.form
		return (
			<Form onSubmit={this.handleSubmit} className="login-form">
				<FormItem>
					{getFieldDecorator('email', {
						rules: [{
							type: 'email', message: 'The input is not valid E-mail!',
						}, {
							required: true, message: 'Please input your E-mail!',
						}],
					})(
						<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Your Email" />
					)}
				</FormItem>
				<FormItem>
					{getFieldDecorator('password', {
						rules: [{ required: true, message: 'Please input your Password!' }],
					})(
						<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
					)}
				</FormItem>
				<FormItem>
					{getFieldDecorator('remember', {
						valuePropName: 'checked',
						initialValue: true,
					})(
						<Checkbox>Remember me</Checkbox>
					)}
					<a className="login-form-forgot" href="">Forgot password</a>
					<Button type="primary" htmlType="submit" className="login-form-button">
						Log in
          </Button>
					Or <Link href='/user/register' > Register now! </Link>
				</FormItem>
			</Form>
		)
	}
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm)

function mapStateToProps(state) {
	const { account } = state
	return { account }
}
export default connect(mapStateToProps)(WrappedNormalLoginForm)
