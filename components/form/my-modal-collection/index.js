import { Component } from 'react'
import { Button, Modal, Form, Input, Radio } from 'antd'
import 'antd/dist/antd.css'

const FormItem = Form.Item

const formItemLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 24 },
};

class FormCollection extends Component {
  state = {
    fieldChanging: ''
  }

  handleOnChange = (fieldChilds, callback) => {
    const { fieldChanging } = this.props
    if (this.state.fieldChanging !== fieldChanging) {
      this.setState({
        fieldChanging: fieldChanging
      })
      callback && callback()
      for (let i = 0; i < fieldChilds.length; i++) {
        this.resetFields(fieldChilds[i])
      }
    }
  }

  resetFields = (fieldName) => {
    this.props.form.resetFields(fieldName)
  }

  render() {
    const { visible, onCancel, onCreate, form, collectionForm, fieldChanging } = this.props
    const { getFieldDecorator } = form
    const content = collectionForm.length > 0 &&
      collectionForm.map(
        item => {
          if (item.hidden) return
          if (item.name) {
            // form normal
            let itemProps = { ...item.componentProps }
            if (fieldChanging === item.name) {
              if (item.fieldChilds) {
                itemProps = {
                  ...item.componentProps,
                  ...{ onChange: this.handleOnChange(item.fieldChilds, item.componentProps.onChange) }
                }
              }
            }
            return (
              <FormItem
                {...item.layout || formItemLayout}
                label={item.label || ''}
                style={{ display: item.display || 'inline-flex' }}
              >
                {getFieldDecorator(item.name, { ...item.options })(
                  <item.component {...itemProps} />
                )}
              </FormItem>
            )
          } else {
            // form no get value to submit
            return (
              <FormItem
                {...item.layout || formItemLayout}
                label={item.label || ''}
                style={{ display: item.display || 'inline-flex' }}
              >
                <item.component {...item.componentProps} {...item.options} />
              </FormItem>
            )
          }
        })
    // map order
    return (
      <Modal
        visible={visible}
        title={this.props.modalTitle}
        okText={this.props.okText}
        onCancel={onCancel}
        onOk={onCreate}
        className={this.props.modalClassName}
        {...this.props}
      >
        <Form
          layout="inline"
        >
          {content}
        </Form>
      </Modal>
    )
  }
}

class MyModalCollection extends Component {
  state = {
    visible: false,
  }

  showModal = () => {
    this.setState({ visible: true })
  }
  hideModal = () => {
    this.setState({ visible: false })
  }
  handleCancel = () => {
    const { cancelText, step } = this.props
    cancelText && cancelText.props.onClick && cancelText.props.onClick()
    step < 2 && this.hideModal()
  }

  handleCreate = () => {
    const { canSubmit, okText, submit } = this.props
    const form = this.formRef.props.form
    form.validateFields((err, values) => {
      if (err) {
        return
      }
      okText && okText.props.onClick && okText.props.onClick()
      canSubmit && form.resetFields()
      canSubmit && submit && submit(values)
      canSubmit && this.hideModal()
    })
  }

  handleSave = () => {
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
      collectionForm,
      // footer
      // onFalse
    } = this.props

    return (
      <div className={`my-modal-collection ${className || ''}`}>
        <Button onClick={this.showModal} >{buttonContent || 'New Collection'}</Button>
        <CollectionCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
          onSave={this.handleSave}
          collectionForm={collectionForm}
          // modalClassName={modalC}
          {...this.props}
        // footer={footer}
        // onFalse={}
        />
      </div>
    )
  }
}

const CollectionCreateForm = Form.create()(FormCollection)
export default MyModalCollection
