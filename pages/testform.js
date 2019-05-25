
import React from 'react';
import 'antd/dist/antd.css';
// import fs from 'fs'
import {
  Form, Select, InputNumber, Input, Switch, Radio,
  Slider, Button, Upload, Icon, Rate,
} from 'antd';
import 'isomorphic-unfetch'
import endpoint from '../common/endpoint'
const FormItem = Form.Item;
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
// const fs = require('fs')

class Demo extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    var fs = require('fs');
    this.props.form.validateFields((err, values) => {
      const token = localStorage.getItem('resUserToken')
      console.log(token)
      
      if (!err) {
        let fd = new FormData()
        console.log('Received values of form: ', values);
        let stream
        // try {
        //   fs.readFile(values.property.new_image_path[""], (err, res) => {
        //     if (err) {
        //       console.log('error',error)
        //      }
        //      stream = res
        //   })
  
        // } catch (error) {
        //   console.log(error)
        // }
        // console.log('stream', stream)
        fd.append('property[condo_id]', values.property.condo_id)
        // console.log('values.property.new_image_path', values.property.new_image_path[""][0])
        // fd.append('property[new_image_path][]',  values.property.new_image_path[""] || null)
        const configs = {
          method: 'POST',
          // body: JSON.stringify(data),
          body: fd,
          headers: {
            'Authorization': token
          },
        }
        fetch(endpoint.property.createProperty, configs)
      }
    });
  }

  normFile = (e) => {
    // return e && e.file
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  }

  actionUpload = (e) => {
    console.log(e)
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    return (
      <Form onSubmit={this.handleSubmit}>

        <FormItem
          {...formItemLayout}
          label="Condo Id"
        >
          {getFieldDecorator('property[condo_id]')(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="File "
        >
          {getFieldDecorator('property[new_image_path][]')(
            <Input type='file' />
          )}
        </FormItem>
        {/* <FormItem
          {...formItemLayout}
          label="Upload"
          extra="longgggggggggggggggggggggggggggggggggg"
        >
          {getFieldDecorator('property[new_image_path][]', {
            valuePropName: 'fileList',
            getValueFromEvent: this.normFile,
          })(
            <Upload name="logo" action={this.actionUpload} listType="picture">
              <Button>
                <Icon type="upload" /> Click to upload
              </Button>
            </Upload>
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="Dragger"
        >
          <div className="dropbox">
            {getFieldDecorator('dragger', {
              valuePropName: 'fileList',
              getValueFromEvent: this.normFile,
            })(
              <Upload.Dragger name="files" action="/upload.do">
                <p className="ant-upload-drag-icon">
                  <Icon type="inbox" />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">Support for a single or bulk upload.</p>
              </Upload.Dragger>
            )}
          </div>
        </FormItem> */}

        <FormItem
          wrapperCol={{ span: 12, offset: 6 }}
        >
          <Button type="primary" htmlType="submit">Submit</Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedDemo = Form.create()(Demo);

export default WrappedDemo