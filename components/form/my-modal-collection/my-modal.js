import { Component, Children } from 'react'
import { Modal, Button } from 'antd'
import CollectionCreateForm from './collection-form'

class MyModal extends Component {
  state = {
    visible: false,
  }

  showModal = () => {
    this.setState({
      visible: true
    })
  }

  hideModal = () => {
    this.setState({
      visible: false
    })
  }
  handleCancel = () => {
    // const { cancelText, step } = this.props
    // cancelText && cancelText.props.onClick && cancelText.props.onClick()
    // step < 2 && 
    this.setState({ visible: false })
  }

  handleCreate = () => {
    const { canSubmit, okText, submit } = this.props
    const form = this.formRef.props.form
    form.validateFields((err, values) => {
      if (err) {
        return
      }
      // okText && okText.props.onClick && okText.props.onClick()
      // canSubmit && form.resetFields()
      // canSubmit && submit && submit(values)
      // canSubmit && this.setState({ visible: false })
    })
    this.hideModal()
  }

  handleSave = () => {
    this.setState({ visible: false })
    const form = this.formRef.props.form
    form.validateFields((err, value) => {
      if (err) {
        return
      }
    })

  }

  saveFormRef = (formRef) => {
    this.formRef = formRef
  }

  render() {
    const {
      buttonContent,
      className,
      // footer
      // onFalse
    } = this.props

    return (
      <div className={`my-modal ${className || ''}`}>
        <Button onClick={this.showModal} >{buttonContent}</Button>
        <Modal
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
          {...this.props}
        >
          {children}
        </Modal>
      </div>
    )
  }
}

export default MyModal


// MyModal nay chi chua 1 nut co kha nang truyen vao children va 1 modal voi noi dung truyen vao, ko chua cai khac