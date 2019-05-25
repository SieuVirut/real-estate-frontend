import Layout from '../index'
import FormSearch from '../components/form/search'
import '../styles/home.scss'

export default () => (
  <Layout>
    <div className='res-home-form-search'>
      <span className='res-home-block-text-1'> Tìm căn nhà <span style={{ color: '#30AADC' }}> mơ ước </span> của bạn </span>
      <br />
      <span className='res-home-block-text-2'> NGAY HÔM NAY </span>
      <br />
      <FormSearch />
    </div>
  </Layout>
)