import dynamic from 'next/dynamic'
const FbPhotoGrid = dynamic({
  loader: () => import('./FbPhotoGrid'),
  ssr: false,
})

export default ({...props}) => <FbPhotoGrid {...props} />