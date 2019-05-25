
import React from 'react'
import { Icon, Button, Input, AutoComplete, Select } from 'antd'
import Link from 'next/link'
import 'antd/dist/antd.css'
import { connect } from 'react-redux'
// import { searchCondosWithQuery } from '../../lib/condo/actions'
const Option = AutoComplete.Option;

function onSelect(value) {
}

function getRandomInt(max, min = 0) {
  return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line no-mixed-operators
}

function searchResult(query) {
  return (new Array(getRandomInt(5))).join('.').split('.')
    .map((item, idx) => ({
      query,
      category: `${query}${idx}`,
      count: getRandomInt(200, 100),
    }));
}

function renderOption(item) {
  return (
    <Option key={item.category} text={item.category}>
      {item.query} {`trong `}
      <Link
        href={`/search?q=${item.query}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {item.category}
      </Link>
      {` được `}
      <span className="global-search-item-count">{`  tìm thấy ${item.count} kết quả `}</span>
    </Option>
  );
}

const selectBefore = (
  <Icon type="search" />
)

const selectAfter = (
  <div className='res-choose-type-select'>
    <Icon type="bars" />
    <Select defaultValue='1' style={{ width: 'auto' }}>
      <Option value="1">CĂN HỘ BÁN</Option>
      <Option value="2">DỰ ÁN MỚI NỔI BẬT</Option>
    </Select>
  </div>
);

class Complete extends React.Component {
  state = {
    dataSource: [],
  }

  handleSearch = (value) => {
    this.setState({
      dataSource: value ? searchResult(value) : [],
    });
    const { dispatch } = this.props
    // dispatch(searchCondosWithQuery(value))
  }

  render() {

    const { dataSource } = this.state;
    return (
      <div className="global-search-wrapper" style={{ width: 'auto', margin: 'auto' }}>
        <style jsx global>{`
          .ant-input, .ant-select-selection__placeholder {
            font-family: Montserrat-Regular;
            font-size: 20px;
            color: #A5AFC4;
            letter-spacing: 0;
            min-width: 300px;
          }
          .res-choose-type-select .ant-select-selection__rendered {
              padding-left: 20px;
          }
          .ant-select-selection__placeholder {
            padding: 0 40px;
          }
        
          .ant-input-group-addon {
            background-color: inherit !important;
            border-bottom-right-radius: 84px !important;
            border-top-right-radius: 84px !important;
          }
          .ant-input-group-addon:first-child {
            border-bottom-right-radius: 0 !important;
            border-top-right-radius: 0 !important;
            border-bottom-left-radius: 84px !important;
            border-top-left-radius: 84px !important;
          }
          .ant-select-selection ,ant-select-selection--single {
            background-color: transparent !important;
          }
        `}</style>
        <AutoComplete
          className="global-search"
          size="large"
          style={{ width: '100%' }}
          dataSource={dataSource.map(renderOption)}
          onSelect={onSelect}
          onSearch={this.handleSearch}
          placeholder="Tìm kiếm theo dự án hay khu vực"
          optionLabelProp="text"
        >
          <Input
            addonBefore={selectBefore}
            addonAfter={selectAfter}
          />
        </AutoComplete>
      </div>
    );
  }
}

export default connect()(Complete)