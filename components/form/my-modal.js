import { Component } from 'react'
import { Modal, Button } from 'antd'

class MyModal extends Component {
  state = {
    visible: false
  }

  showModal = () => {
    this.setState({
      visible: true
    })
  }

  handleOk = e => {
    const { handleOk } = this.props
    handleOk && handleOk()
    this.setState({
      // visible: false
    })
  }

  handleCancel = e => {
    const { handleCancel } = this.props
    handleCancel && handleCancel()
    this.setState({
      // visible: false
    })
  }

  handleSave = e => {
    const { handleSave } = this.props
    handleSave && handleSave()
    this.setState({
      visible: false
    })
  }

  myFooter = () => {
    const { okText, saveText, cancelText } = this.props
    return (
      <div className='my-modal-footer'>
        <Button onClick={this.handleCancel}> {cancelText ? cancelText : 'Cancel'} </Button>
        <Button onClick={this.handleSave}> {saveText ? saveText : 'Save'} </Button>
        <Button onClick={this.handleOk}> {okText ? okText : 'OK'} </Button>
      </div>
    )
  }

  render() {
    const {
      className,
      buttonContent,
      modalTitle,
      modalContent,
      modalClassName,
    } = this.props

    return (
      <div className={`my-modal ${className}`}>
        <Button onClick={this.showModal}>
          {buttonContent}
        </Button>
        <Modal
          title={modalTitle}
          visible={this.state.visible}
          className={modalClassName}
          {...this.props}
          footer={this.myFooter()}
        >
          {modalContent}
        </Modal>
      </div >
    )
  }
}

export default MyModal