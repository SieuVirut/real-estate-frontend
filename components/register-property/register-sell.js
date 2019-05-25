{/* <Tabs defaultActiveKey="1">
						<TabPane tab={<Radio value={1}>Bán</Radio>} key="1">
							Diện tích: {inputAcreage} m2 <Slider max={1000} step={10} onChange={this.onChangeAcreage} /> <br />
							Số phòng ngủ:<InputNumber min={1} max={10} defaultValue={3} onChange={this.onChangeRoom} /> <br />
							Số nhà vệ sinh:<InputNumber min={1} max={10} defaultValue={3} onChange={this.onChangeTolet} /> <br />
							Hướng ban công:<Select
								showSearch
								style={{ width: '30%' }}
								placeholder="Không xác định"
								onChange={this.handleChange}
								onFocus={this.handleFocus}
								onBlur={this.handleBlur}
								filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
							>
								{listDirection.map(item => <Option key={item.id}>{item.name}</Option>)}
							</Select> <br />
							Giá bán: {inputCost} Tỷ <Slider max={100} step={1} onChange={this.onChangeinputCost} /> <br />
							<TextArea rows={4} placeholder="Nội dung đăng tải ..." />
							<div className="ant-upload-text">Upload</div>
						</TabPane>
						<TabPane tab={<Radio value={2}>Cho thuê</Radio>} key="2">
							Diện tích: {inputAcreage} m2 <Slider max={1000} step={10} onChange={this.onChangeAcreage} /> <br />
							Số phòng ngủ:<InputNumber min={1} max={10} defaultValue={3} onChange={this.onChangeRoom} /> <br />
							Số nhà vệ sinh:<InputNumber min={1} max={10} defaultValue={3} onChange={this.onChangeTolet} /> <br />
							Hướng ban công:<Select
								showSearch
								style={{ width: '30%' }}
								placeholder="Không xác định"
								onChange={this.handleChange}
								onFocus={this.handleFocus}
								onBlur={this.handleBlur}
								filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
							>
								{listDirection.map(item => <Option key={item.id}>{item.name}</Option>)}
							</Select> <br />
							Giá cho thuê: {inputCost} Tỷ <Slider max={100} step={1} onChange={this.onChangeinputCost} /> <br />
							Khi nào có thể cho thuê :
              <Select
								showSearch
								style={{ width: '100%' }}
								placeholder="Chọn tầng"
								optionFilterProp="children"
								onChange={this.handleChange}
								onFocus={this.handleFocus}
								onBlur={this.handleBlur}
								filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
							>
								{listProject.map(item => <Option key={item.id}>{item.name}</Option>)}
							</Select><br />
							Chọn thêm tiện ích cho thuê:
              <Select
								showSearch
								style={{ width: '100%' }}
								placeholder="Chọn tầng"
								optionFilterProp="children"
								onChange={this.handleChange}
								onFocus={this.handleFocus}
								onBlur={this.handleBlur}
								filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
							>
								{listProject.map(item => <Option key={item.id}>{item.name}</Option>)}
							</Select>
						</TabPane>
						<TabPane tab={<Radio value={3}>Không có nhu cầu giao dịch</Radio>} key="3">
							Bạn đã đang ký sở hữu và yêu cầu tránh làm phiền thành công

  Để tăng tính xác thực chính chủ sở hữu, xin vui lòng tải hình ảnh của một trong nhưng giấy tờ sau: Sổ đỏ hoặc

  hợp đồng hoặc hóa đơn điện có số căn hộ nhà bạn. Xem chính sách bảo mật
              <div className="ant-upload-text">Upload</div>
						</TabPane>
					</Tabs> */}


// const listDirection = [
// 	{
// 		id: 1,
// 		name: "Đông"
// 	},
// 	{
// 		id: 2,
// 		name: "Tây"
// 	},
// 	{
// 		id: 3,
// 		name: "Nam"
// 	},
// 	{
// 		id: 4,
// 		name: "Bắc"
// 	},
// 	{
// 		id: 5,
// 		name: "Đông Bắc"
// 	},
// 	{
// 		id: 6,
// 		name: "Đông Nam"
// 	},
// 	{
// 		id: 7,
// 		name: "Tây Bắc"
// 	},
// 	{
// 		id: 8,
// 		name: "Tây Nam"
// 	},
// ]

export default () => <div> Dang ki ban </div>