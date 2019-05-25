import { Component } from 'react'
import MyModalCollection from '../form/my-modal-collection'
import MyModal from '../form/my-modal'
import { Form, Input, Radio, Icon, Select, Slider, InputNumber, Upload, Checkbox } from 'antd'
import ListImages from '../list-images'
import { connect } from 'react-redux'
import RegisterRent from './register-rent'
import { fetchListBuilding, clearListBuilding } from '../../lib/building/actions'
import { fetchListFloor, clearListFloor } from '../../lib/floor/actions'
import { fetchListCondosByFloor, cleanListCondosByFloor } from '../../lib/condo/actions'
import MyUploadForm from '../../components/form/my-upload-form'
import { fetchListProject } from '../../lib/project/actions'
import { createProperty } from '../../lib/property/actions'
import MyUploadImage from '../form/upload-images'
import { updateLocale } from 'moment';

const FormItem = Form.Item
const RadioGroup = Radio.Group
const Option = Select.Option
const UploadDragger = Upload.Dragger
const plainOptions = ['Bán', 'Cho thuê', 'Không làm phiền']
const uploadDragerChildren = (
	<div>
		<p className="ant-upload-drag-icon">
			<Icon type="inbox" />
		</p>
		<p className="ant-upload-text">Click or drag file to this area to upload</p>
		<p className="ant-upload-hint">Support for a single or bulk upload.</p>
	</div>
)

const typeRegisterProperty = [
	{ label: 'Bán', value: 'for_rent' },
	{ label: 'Cho thuê', value: 'for_sell' },
	{ label: 'Không làm phiền', value: 'unregister' },
]
const direction = [
	{ label: 'Đông', value: 1 },
	{ label: 'Tây', value: 2 },
	{ label: 'Nam', value: 3 },
	{ label: 'Bắc', value: 4 },
	{ label: 'Đông Bắc', value: 5 },
	{ label: 'Tây Bắc', value: 6 },
	{ label: 'Tây Nam', value: 7 },
	{ label: 'Đông Nam', value: 8 }
]
class RegisterProperty extends Component {
	state = {
		step: 1,
		type: 'for_rent',
		new_image_path: [],
		fieldChanging: ''
	}

	uploadDragerChildren = () => {
		const { new_image_path } = this.state
		console.log('new_image_path', new_image_path)
		return (
			<div>
				<p className="ant-upload-drag-icon">
					<Icon type="inbox" />
				</p>
				<p className="ant-upload-text">Click or drag file to this area to upload</p>
				<p className="ant-upload-hint">Support for a single or bulk upload.</p>
			</div>
		)

	}

	componentWillMount = () => {
		const { dispatch } = this.props
		dispatch(fetchListProject(null))
	}

	onChangeTypeRegisterProperty = (e) => {
		this.setState({
			type: e.target.value,
		});
	}

	onChangeProject = (projectId) => {
		const { dispatch } = this.props
		console.log('projectId', projectId)
		projectId && dispatch(fetchListBuilding(projectId))
		dispatch(clearListFloor())
		dispatch(cleanListCondosByFloor())
		this.handleChangeStateFieldChanging('project_id')
		// this.onChangeNewImagesPath()
	}

	onChangeBuilding = (buildingId) => {
		const { dispatch } = this.props
		buildingId && dispatch(fetchListFloor(buildingId))
		// this.onChangeNewImagesPath()
		dispatch(cleanListCondosByFloor())
		this.handleChangeStateFieldChanging('building_id')
	}

	onChangeFloor = (floorId) => {
		const { dispatch } = this.props
		floorId && dispatch(fetchListCondosByFloor(floorId))
		// this.onChangeNewImagesPath()
		this.handleChangeStateFieldChanging('floor_id')
	}

	onChangeCondos = (condoCode) => {
		const { listCondosByFloor } = this.props
		let url = this.state.new_image_path

		listCondosByFloor[0].images && url.push(listCondosByFloor[0].images)
		listCondosByFloor[0].project_images && url.push(listCondosByFloor[0].project_images)
		listCondosByFloor[0].floor_images && url.push(listCondosByFloor[0].floor_images)
		listCondosByFloor[0].building_images && url.push(listCondosByFloor[0].building_images)

		this.setState({
			new_image_path: url
		})
		console.log('new_image_path', this.state.new_image_path)
	}

	handleSubmit = (values) => {
		const { dispatch } = this.props
		const data = JSON.stringify(values)
		dispatch(createProperty(values))
	}

	handleChangeStateFieldChanging = (fieldName) => {
		if (this.state.fieldChanging !== fieldName) {
			this.setState({
				fieldChanging: fieldName
			})
		}
	}

	normFile = (e) => {
		console.log('Upload event:', e);
		if (Array.isArray(e)) {
			return e;
		}
		return e && e.fileList;
	}

	canSubmit = () => {
		if (this.state.step > 1 && this.state.type === 'for_rent') return true
		return false
	}

	canHidden = () => {
		if (this.state.step === 1 || this.canSubmit()) return true
		return true
	}
	onChangeNewImagesPath = (event) => {
		console.log(event.target.files[0])
		// this.setState({
		// 	new_image_path: []
		// })
	}

	getModalTitle = () => {
		const { listCondosByFloor } = this.props
		const code = listCondosByFloor && listCondosByFloor.length > 0 && listCondosByFloor[0].code || ''
		let modalTitle = <h3> Đăng ký bán, cho thuê hoặc tránh làm phiền cho căn hộ của bạn</h3>
		if (this.state.step === 1) { }
		if (this.state.step === 2 && this.state.type === 'for_rent') {
			modalTitle = <h3> Đăng ký bán căn hộ {code} </h3>
		}
		if (this.state.step === 3 && this.state.type === 'for_rent') {
			modalTitle = <h3> Đã đăng ký bán căn hộ {code} thành công </h3>
		}
		return modalTitle
	}

	render() {
		const { listProject, listBuilding, listFloor, listCondosByFloor } = this.props

		const buttonContent = (
			<div>
				<h3> Đăng ký căn hộ bạn sở hữu</h3>
				<h6> (Bạn có thể đăng bán, cho thuê, đăng kí tránh làm phiền ) </h6>
			</div>
		)
		const layout = {
			wrapperCol: { span: 24 },
		}
		const collectionForm = [
			// step = 1 
			{
				component: Select,
				layout: {
					...layout,
					labelCol: { span: 12 },
				},
				name: 'project_id',
				fieldChilds: ['building_id', 'floor_id', 'property[condo_id]'],
				display: this.state.step === 1 ? 'block' : 'none',
				hidden: false,
				options: {
					rules: [
						{ required: true, message: 'Vui lòng chọn khu đô thị hoặc dự án' },
					],
				},
				componentProps: {
					placeholder: "Chọn khu đô thị hay dự án của bạn",
					showArrow: true,
					allowClear: true,
					showSearch: true,
					autoClearSearchValue: true,
					optionFilterProp: 'children',
					onChange: this.onChangeProject,
					disabled: !listProject.length,
					filterOption: (input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0,
					children: listProject.length && listProject.map(item => <Option key={item.id} label={item.name}>{item.name}</Option>)
				}
			},
			{
				name: 'building_id',
				fieldChilds: ['floor_id', 'property[condo_id]'],
				component: Select,
				layout: {
					...layout,
					labelCol: { span: 24 },
					wrapperCol: { span: 24 },
				},
				options: {
					rules: [
						{ required: true, message: 'Vui lòng tòa nhà' },
					],
				},
				display: this.state.step === 1 ? 'block' : 'none',
				hidden: false,
				componentProps: {
					placeholder: "Chọn tòa:",
					showArrow: true,
					allowClear: true,
					showSearch: true,
					autoClearSearchValue: true,
					optionFilterProp: 'children',
					onChange: this.onChangeBuilding,
					disabled: !listBuilding.length,
					filterOption: (input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0,
					children: listBuilding.length && listBuilding.map(item => <Option key={item.id} label={item.name}>{item.name}</Option>)
				}
			},
			{
				name: 'floor_id',
				// parents: ['property_id', 'buiding_id'],
				component: Select,
				fieldChilds: ['property[condo_id]'],
				layout: {
					...layout,
					labelCol: { span: 8 },
					// wrapperCol: { span: 8 },
				},
				display: this.state.step === 1 ? 'block' : 'none',
				hidden: false,
				options: {
					rules: [
						{ required: true, message: 'Vui lòng chọn tầng' },
					],
				},
				componentProps: {
					placeholder: "Chọn tầng:",
					showArrow: true,
					allowClear: true,
					showSearch: true,
					autoClearSearchValue: true,
					optionFilterProp: 'children',
					onChange: this.onChangeFloor,
					disabled: !listFloor.length,
					filterOption: (input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0,
					children: listFloor.length && listFloor.map(item => <Option key={item.id} label={item.name}>{item.name}</Option>)
				}
			},
			{
				name: 'property[condo_id]',
				// parents: ['property_id', 'buiding_id'],
				component: Select,
				layout: {
					...layout,
					labelCol: { span: 8 },
					// wrapperCol: { span: 8 },
				},
				display: this.state.step === 1 ? 'block' : 'none',
				hidden: false,
				options: {
					rules: [
						{ required: true, message: 'Vui lòng chọn số căn hộ' },
					],
				},
				componentProps: {
					placeholder: "Chọn số căn hộ:",
					showArrow: true,
					allowClear: true,
					showSearch: true,
					autoClearSearchValue: true,
					optionFilterProp: 'children',
					onChange: this.onChangeCondos,
					disabled: !listCondosByFloor.length,
					filterOption: (input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0,
					children: listCondosByFloor.length && listCondosByFloor.map(item => <Option key={item.id} label={item.code}>{item.code}</Option>)
				}
			},
			{
				name: 'type',
				display: this.state.step === 1 ? 'block' : 'none',
				hidden: false,
				component: RadioGroup,
				options: {
					rules: [
						{ required: true, message: 'Vui lòng chọn 1 trong 3 lựa chọn' },
					],
				},
				componentProps: {
					options: typeRegisterProperty,
					onChange: this.onChangeTypeRegisterProperty,
					value: this.state.type
				}
			},
			// step = 2
			// {
			// 	label: 'Diện tich',
			// 	name: 'size',
			// 	// required: true,
			// 	ruleMessage: 'Vui lòng chọn diện tích phù hợp',
			// 	display: this.state.step === 2 ? 'flex' : 'none',
			// 	hidden: this.state.type !== 'for_rent',
			// 	component: InputNumber,
			// 	componentProps: {
			// 		// step: 1,
			// 		min: 0,
			// 		max: 200,
			// 		max: 200,
			// 		// formatter: value => value ? value : listCondosByFloor && listCondosByFloor.length > 0 && listCondosByFloor[0].size || 0,
			// 		// defaultValue: listCondosByFloor && listCondosByFloor.length > 0 && listCondosByFloor[0].size || 0,
			// 	}
			// },
			// {
			// 	label: 'Số phòng ngủ',
			// 	name: 'bedroom',
			// 	// required: true,
			// 	ruleMessage: 'Vui lòng chọn số căn ngủ bạn có',
			// 	display: this.state.step === 1 ? 'flex' : 'none',
			// 	hidden: this.state.type !== 'for_rent',
			// 	component: InputNumber,
			// 	componentProps: {
			// 		autocomplete: true,
			// 		step: 1,
			// 		defaultValue: 2,
			// 		min: 1,
			// 		max: 20,
			// 		// formatter: value => value ? value : listCondosByFloor && listCondosByFloor.length > 0 && listCondosByFloor[0].bedroom || 0,
			// 		// defaultValue: listCondosByFloor && listCondosByFloor.length > 0 && listCondosByFloor[0].bedroom || 0,
			// 		// formatter: value => `${value ? value: 0 } phòng`
			// 	}
			// },
			// {
			// 	label: 'Số phòng vệ sinh',
			// 	name: 'wc_room',
			// 	// required: true,
			// 	ruleMessage: 'Vui lòng chọn số phòng vệ sinh bạn có',
			// 	display: this.state.step === 1 ? 'flex' : 'none',
			// 	hidden: this.state.type !== 'for_rent',
			// 	component: InputNumber,
			// 	componentProps: {
			// 		step: 1,
			// 		min: 1,
			// 		max: 20,
			// 		// formatter: value => value ? value : listCondosByFloor && listCondosByFloor.length > 0 && listCondosByFloor[0].wc_room || 0,
			// 		// defaultValue: listCondosByFloor && listCondosByFloor.length > 0 && listCondosByFloor[0].wc_room || 0,
			// 		// formatter: value => `${value ? value: 0 } phòng`
			// 	}
			// },
			// {
			// 	label: 'Hướng ban công',
			// 	name: 'direction',
			// 	// required: true,
			// 	ruleMessage: 'Vui lòng chọn hướng ban công',
			// 	display: this.state.step === 2 ? 'inline-block' : 'none',
			// 	hidden: this.state.type !== 'for_rent',
			// 	component: Select,
			// 	componentProps: {
			// 		children: direction.map(item => <Option key={item.value}>{item.label}</Option>),
			// 	}
			// },
			// {
			// 	label: 'Giá',
			// 	name: 'price_sale',
			// 	// required: true,
			// 	ruleMessage: 'Vui lòng chọn mức giá phù hợp',
			// 	display: this.state.step === 2 ? 'block' : 'none',
			// 	hidden: this.state.type !== 'for_rent',
			// 	component: Slider,
			// 	componentProps: {
			// 		min: 100,
			// 		max: 1200,
			// 		// defaultValue: listCondosByFloor && listCondosByFloor.length > 0 && listCondosByFloor[0].price_sale || 0,
			// 	}
			// },
			// {
			// 	label: 'Gía có thương lượng',
			// 	name: 'is_change_price',
			// 	display: this.state.step === 2 ? 'block' : 'none',
			// 	hidden: this.state.type !== 'for_rent',
			// 	component: Checkbox,
			// 	componentProps: {
			// 		defaultChecked: true,
			// 	}
			// },
			// {
			// 	label: 'Một số hình ảnh',
			// 	name: 'property[new_image_path][]',
			// 	display: this.state.step === 1 ? 'block' : 'none',
			// 	hidden: this.state.type !== 'for_rent',
			// 	component: UploadDragger,
			// 	options: {
			// 		valuePropName: 'fileList',
			// 		getValueFromEvent: this.normFile,
			// 	},
			// 	componentProps: {
			// 		children: uploadDragerChildren,
			// 		name: 'files',
			// 		// actions: '/upload.do'
			// 	}
			// },
			{
				label: 'Một số hình ảnh',
				name: 'property[new_image_path][]',
				display: this.state.step === 1 ? 'block' : 'none',
				hidden: this.state.type !== 'for_rent',
				component: UploadDragger,
				options: {
					valuePropName: 'fileList',
					getValueFromEvent: this.normFile,
				},
				// option: {
				// 	initialValue: this.state.new_image_path
				// },

				componentProps: {
					type: 'file',
					// multiple: "multiple"
					children: uploadDragerChildren,
					// name: 'files',
					// actions: '/upload.do'
				}
			},
			// {
			// 	label: 'Nội dung đăng tải',
			// 	name: 'description',
			// 	display: this.state.step === 2 ? 'block' : 'none',
			// 	hidden: this.state.type !== 'for_rent',
			// 	component: Input.TextArea,
			// 	componentProps: {
			// 		placeholder: `'Nội dung đăng tải:………………………
			// 		+ Thêm ảnh căn hộ nhà bạn
			// 		(Hiển thị kiểu Facebook add vào cả 1 trang)'`,
			// 		maxlength: 500,
			// 	}
			// },

			// step 3: 
			// {
			// 	name: 'new_image_path2',
			// 	display: this.state.step === 3 ? 'block' : 'none',
			// 	hidden: this.state.type !== 'for_rent',
			// 	component: MyUploadForm,
			// 	componentProps: {
			// 		content: <div>
			// 			<p>	Bạn đã đăng ký sở hữu và đăng bán căn hộ thành công</p>
			// 			<p>Để tăng tính xác thực chính chủ sở hữu, xin vui lòng tải hình ảnh của một trong nhưng giấy tờ sau: Sổ đỏ hoặc</p>
			// 			<p>hợp đồng hoặc hóa đơn điện có số căn hộ nhà bạn. Xem chính sách bảo mật.</p>
			// 		</div>,
			// 		images: this.state.new_image_path
			// 	}
			// },

		]



		return (
			<MyModalCollection
				buttonContent={buttonContent}
				modalTitle={this.getModalTitle()}
				collectionForm={collectionForm}
				// footerCollectionForm={footerCollectionForm}
				className={'form-register'}
				okText={
					<span
						onClick={() => {
							this.setState({
								step: this.state.step + 1
							})
						}}> Tiếp tục<Icon type="right" />
					</span>
				}
				cancelText={
					<span
						onClick={() => {
							this.setState({
								step: this.state.step - 1 || 1
							})
						}}><Icon type="left" /> Quay lại
					</span>
				}
				modalClassName={'modal-register'}
				canSubmit={true}
				submit={this.handleSubmit}
				canHidden={this.canHidden()}
				step={this.state.step}
				fieldChanging={this.state.fieldChanging}
			/>
		)
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

export default connect(mapStateToProps)(RegisterProperty)
