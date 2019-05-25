import { Component } from 'react'
import MyModal from '../form/my-modal'
import { Icon, Menu, Radio, Button, Select, Tabs, Slider, InputNumber, Input, Form } from 'antd'
import { connect } from 'react-redux'
import { fetchListProject } from '../../lib/project/actions'
import { fetchListBuilding } from '../../lib/building/actions'
import { fetchListFloor } from '../../lib/floor/actions'
import { fetchListCondosByFloor, cleanListCondosByFloor } from '../../lib/condo/actions'
import '../../styles/register-building.scss'
import CollectionForm from '../form/my-modal-collection'

const { TextArea } = Input;
const TabPane = Tabs.TabPane
const RadioGroup = Radio.Group;
const Option = Select.Option;
const FormItem = Form.Item
class RegisterBuilding extends Component {
	state = {
		inputAcreage: 0,
		inputCost: 0
	}

	componentWillMount = () => {
		const { dispatch } = this.props
		dispatch(fetchListProject(null))
	}

	handleChange = (value) => {
		console.log(`selected ${value}`);
	}

	onChangeProject = (projectId) => {
		const { dispatch } = this.props
		console.log("ahihi", projectId)
		dispatch(cleanListCondosByFloor())
		dispatch(fetchListBuilding(projectId))
	}

	onChangeBuilding = (buildingId) => {
		const { dispatch } = this.props
		dispatch(fetchListFloor(buildingId))
	}

	onChangeFloor = (floorId) => {
		console.log("floor id", floorId)
		const { dispatch } = this.props
		// dispatch(fetchListCondosByFloor(floorId))
	}

	onChangeCondos = (condoCode) => {
		console.log("Condo code ", condoCode)

	}

	onChangeCondoType = (value) => {
		console.log("onChangeCondoType", value)
	}
	// onChangeAcreage = (value) => {
	// 	console.log(value)
	// 	this.setState({
	// 		inputAcreage: value,
	// 	});
	// }

	// onChangeinputCost = (value) => {
	// 	console.log(value)
	// 	this.setState({
	// 		inputCost: value,
	// 	});
	// }
	// onChangeRoom = (value) => {
	// 	console.log(value)
	// }
	// onChangeToilet = (value) => {
	// 	console.log(value)
	// }

	handleOk = () => {
		// console.log("xxxxxxxxxxxxxxxxxxxxx")
	}


	handleCancel = () => {
		// console.log("xxxxxxxxxxxxxxxxxxxxx")
	}

	customForm = () => {
		const { visible, onCancel, onCreate, form, listProject } = this.props;
		// const { getFieldDecorator } = form;

		return (
			<Form layout="vertical">
				<FormItem label="Title">
					{/* {getFieldDecorator('title', {
						rules: [{ required: true, message: 'Please input the title of collection!' }],
					})(
						<Input />
					)}
				</FormItem>
				<FormItem label="Description">
					{getFieldDecorator('description')(<Input type="textarea" />)}
				</FormItem>
				<FormItem className="collection-create-form_last-form-item">
					{getFieldDecorator('modifier', {
						initialValue: 'public',
					})(
						<Radio.Group>
							<Radio value="public">Public</Radio>
							<Radio value="private">Private</Radio>
						</Radio.Group>
					)} */}
						<Select
					showSearch
					showArrow
					allowClear
					style={{ width: '100%', padding: '3px 0' }}
					placeholder="Chọn khu đô thị hay dự án của bạn"
					optionFilterProp="children"
					onChange={this.onChangeProject}
					disabled={!listProject.length}
					filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
				>
					{listProject.length && listProject.map(item => <Option key={item.id} label={item.name}>{item.name}</Option>)}
				</Select>
				</FormItem>
			</Form>
		)
	} 

	render() {
		// const { inputAcreage, inputCost } = this.state;
		const buttonContent = (
			<div>
				<h3> Đăng ký căn hộ bạn sở hữu</h3>
				<h6> (Bạn có thể đăng bán, cho thuê, đăng kí tránh làm phiền ) </h6>
			</div>
		)
		
		const modalTitle = (
			<h3> Đăng ký bán, cho thuê hoặc tránh làm phiền cho căn hộ của bạn</h3>
		)
		const modalContent = () => {
			const { listProject, listBuilding, listFloor, listCondosByFloor } = this.props
			return (
				<div className="modal-content-custom">
					<Select
						showSearch
						showArrow
						allowClear
						style={{ width: '100%', padding: '3px 0' }}
						placeholder="Chọn khu đô thị hay dự án của bạn"
						optionFilterProp="children"
						onChange={this.onChangeProject}
						disabled={!listProject.length}
						filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
					>
						{listProject.length && listProject.map(item => <Option key={item.id} label={item.name}>{item.name}</Option>)}
					</Select>
					<Select
						showSearch
						style={{ width: '100%', padding: '3px 0' }}
						placeholder="Chọn tòa"
						optionFilterProp="children"
						onChange={this.onChangeBuilding}
						disabled={!listBuilding.length}
						filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
					>
						{listBuilding.length && listBuilding.map(item => <Option key={item.id}>{item.name}</Option>)}
					</Select>
					<Select
						showSearch
						style={{ width: '100%', padding: '3px 0' }}
						placeholder="Chọn tầng"
						optionFilterProp="children"
						disabled={!listFloor.length}
						onChange={this.onChangeFloor}
						filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
					>
						{listFloor.length && listFloor.map(item => <Option key={item.id}>{item.name}</Option>)}
					</Select>
					<Select
						showSearch
						style={{ width: '100%', padding: '3px 0' }}
						placeholder="Chọn số căn hộ"
						optionFilterProp="children"
						onChange={this.onChangeCondos}
						disabled={!listCondosByFloor.length}
						filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
					>
						{listCondosByFloor.length && listCondosByFloor.map(item => <Option key={item.id}>{item.code}</Option>)}
					</Select>
					<RadioGroup onChange={this.onChangeCondoType}>
						<Radio value={'for_sale'}> Bán</Radio>
						<Radio value={'for_rent'}> Cho thuê </Radio>
						<Radio value={'for_silent'}> Không có nhu cầu giao dịch</Radio>
					</RadioGroup>
					<RadioGroup defaultValue={'for_sale'}>
					</RadioGroup>
				</div>
			)
		}

		return <MyModal
			buttonContent={buttonContent}
			handleOk={this.handleOk}
			handleCancel={this.handleCancel}
			modalTitle={modalTitle}
			modalContent={modalContent()}
			okText={<span> Tiếp tục<Icon type="right" /></span>}
			saveText={<span> Lưu lại và thoát</span>}
			cancelText={<span><Icon type="left" /> Quay lại </span>}
			className='form-register'
		/>
		// return <CollectionForm
		// 	buttonContent={buttonContent}
		// 	customForm={this.customForm()}
		// />
	}
}

const mapStateToProps = (state) => {
	return {
		listProject: state && state.project && state.project.listProject || {},
		listBuilding: state && state.building && state.building.listBuilding || {},
		listFloor: state && state.floor && state.floor.listFloors || {},
		listCondosByFloor: state && state.condos && state.condos.listCondosByFloor || {},
	}
}

export default connect(mapStateToProps)(RegisterBuilding)
