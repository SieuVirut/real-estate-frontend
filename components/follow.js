import MyModal from './form/my-modal'

const buttonContent = (
  <div>
    <h3> THEO DOI CAN HO BAN QUAN TAM </h3>
    <h6> (bạn có thể đang ký nhận thông báo khi có căn hộ mình quan tâm được rao bán/ cho thuê)) </h6>
  </div>
)

const modalTitle = (
  <h3> THEO DOI CAN HO BAN QUAN TAM </h3>
)

const modalContent = (
  <p>Some contents...</p>
)

function handleOk() {
}


function handleCancel() {
}
export default ({ }) => {

  return <MyModal
    buttonContent={buttonContent}
    handleOk={handleOk}
    handleCancel={handleCancel}
    modalTitle={modalTitle}
    modalContent={modalContent}
    className='form-follow'
  />
}