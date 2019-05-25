import React, { Component } from 'react'
import { Button } from 'antd'
import FilterByPrice from './menu-search-items/filter-by-price'
import FilterByTime from './menu-search-items/filter-by-time'
import FilterByArea from './menu-search-items/filter-by-area'
import FilterAdvance from './menu-search-items/filter-advance'
import '../styles/menu-search.scss'

class MenuSearch extends Component {
 
  render() {
    return (
      <div className='res-menu-search-top'>
        <div className='res-menu-search-top-left'>
          <FilterByPrice />
          <FilterByArea />
          <FilterByTime />
          <FilterAdvance />
        </div>
        <div className='res-menu-search-top-right'>
          <Button > Ban do </Button>
          <Button > Bang </Button>
        </div>

      </div>
    )
  }
}

export default MenuSearch
