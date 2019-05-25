import PropertyItem from './property-item'

export default ({ data }) => {

  if (!Array.isArray(data) || !data.length) {
    return <div> Nodata </div>
  }

  const listProperty = data.map(propertyInfo => <PropertyItem info={propertyInfo} />)
  return listProperty
}