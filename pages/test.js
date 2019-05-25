// import dynamic from 'next/dynamic'
// const TestForm = dynamic({
//   loader: () => import('./testform'),
//   ssr: false,
// })

// export default ({...props}) => <TestForm {...props} />

import MyUpload from '../components/form/upload-images'

export default ({ ...props }) => <MyUpload {...props} />