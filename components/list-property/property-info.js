import React, { Component } from 'react'
import { Icon, Button } from 'antd'
import Router from 'next/router'
import { getCustomTime } from '../../common/function'
import TelephoneButton from '../form/telephone-button'
import Favorite from '../form/favorite'
import '../../styles/list-property/property-info.scss'


class PropertyInfos extends Component {
	state = {
		showUserInfo: false
	}

	// building_id(pin): 1
	// title(pin): null
	// status(pin): "for_sale"
	// size(pin): 100
	// price_sale(pin): 100
	// price_rent(pin): 12321
	// id(pin): 9
	// furnishing(pin): null
	// floor_id(pin): 9
	// direction(pin): "A"
	// description(pin): "JADE SCAPE Condominium For VVIP invites to the pre-public launch, contact developer sales team: Brian Qing +65 9187 7747."
	// code(pin): "TFF9R3"
	// bedroom(pin): 2
	// wc_room(pin): 2

	// 	⃝ (1) Tên dự án (Sky city 88 Láng Hạ) - ⃝ (10) Xác thực chính chủ
	// ⃝ (2) Mã căn: S1-12-24
	// ⃝ (3) Địa chỉ (quận, huyện thành phố)
	// ⃝ (4)Diện tích ⃝ (5) số phòng ngủ ⃝ (6) số toilet
	// ⃝ (7) hướng ban công
	// ⃝ (8) giá, (8’) giá theo m2 – Có chữ thương thảo bên cạnh (khi người đăng tich vào thương thảo)
	// ⃝ (9) thời gian đăng (11) Quan tâm (12) số lượt xem, (13) báo cáo xấu (14) Số điện thoại (15) nhắn tin (16) thông tin đăng " Vidu: Tôi cần bán gấp,..."

	render() {
		const { info, className } = this.props
		return (
			<div className={`property-info ${className}`}>
				<div className='header'>
					<span className='name'> {info.project_name}</span>
					<span className='chinh-chu'> {info.is_owner ? 'Chính chủ' : 'Không chính chủ'} </span>
				</div>
				<div className='top'>
					<span> Mã:<span className='code'> {info.code} </span> </span>
					<span className='status'> {info.type === 'for_rent' ? 'Cho Thuê' : 'Đăng bán'} </span>
				</div>
				<div className='middle'>
					<div className='price'>
						<div className='price-total'>
							<span className='icon'> (i) </span>
							<span>
								{info.price_sale && <span className='price-sale'> {info.price_sale} </span>}
								{!info.price_sale && info.price_rent && <span className='price-rent'> {info.price_rent} </span>}
								<span className='vnd'> tỷ</span>
							</span>
						</div>
						<div className='price-part'>
							<div>
								<span className='icon'> (i) </span>
								{/* <span> 20tr/m2 </span> */}
							</div>
							<span> {1 ? 'Có thương lượng' : 'Không thương lượng'}  </span>
						</div>
					</div>
					<div className='direction'>
						<span> Địa chỉ: {info.address} </span>
						<span> Hướng nhà: {info.direction} </span>
					</div>
					<div className='info'>
						{/* 4)Diện tích ⃝ (5) số phòng ngủ ⃝ (6) số toilet */}
						<div className='info-1'>
							<div>
								<span className='icon'> (i) </span>
								<span className=''> {info.size} </span>
							</div>
							<div>
								<span className='icon'> (i) </span>
								<span className=''> {info.bedroom} </span>
							</div>
							<div>
								<span className='icon'> (i) </span>
								<span className=''> {info.wc_room} </span>
							</div>
						</div>
						<div className='info-2'>
							<div>
								<span className='icon'> (i) </span>
								<span className=''> {getCustomTime(info.created_at)} </span>
							</div>
							<div>
								<span className='icon'> <Favorite propertyId={info.id} isFavorites={info.is_favorite} /> </span>
								<span className=''> {info.favorites} </span>
							</div>
							<div>
								<span className='icon'> (i) </span>
								<span className=''> Luot xem: {info.number_view} </span>
							</div>
						</div>
					</div>
				</div>
				<div className='buttom'>
					<TelephoneButton phoneNumber={info.user.phone}/>
					<Button> SMS </Button>
					<Button> Report </Button>
				</div>
			</div >
		)
	}
}

export default PropertyInfos
