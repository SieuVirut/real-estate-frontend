import { Upload, Icon, Modal } from 'antd';
import endpoint from '../../common/endpoint'
class PicturesWall extends React.Component {

  state = {
    previewVisible: false,
    previewImage: '',
    fileList: [],
  };

  showAction = (data) => {
    const is_data_form = true
    if (is_data_form === true) {
      var formData = new FormData();
      Object.keys(data).forEach(key => {
        formData.append(key, data[key])
      }
      );
      // request.send(formData)
    } else {
      request.set("Accept", "application/json");
      request.send(data);
    }
  }
  handleCancel = () => this.setState({ previewVisible: false })

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }

  handleChange = ({ fileList }) => this.setState({ fileList })

  render() {
    const { previewVisible, previewImage, fileList } = this.state;
    const { content, images } = this.props
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <div className="clearfix">
        {content}
        <Upload
          data={this.showAction}
          // action={endpoint.files.uploadFiles}
          // action={this.showAction}
          listType="picture-card"
          fileList={fileList}
          onPreview={this.handlePreview}
          onChange={this.handleChange}
          defaultFileList={this.props.images}
          multiple
        >
          {fileList.length > 10 ? null : uploadButton}
        </Upload>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
    );
  }
}

export default PicturesWall