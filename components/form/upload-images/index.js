import { Component } from 'react'
import 'isomorphic-unfetch'
// import 'isomorphic-form-data'9
import endpoint from '../../../common/endpoint'

class Test extends Component {

  state = {
    selectFile: null
  }
  fileSelectedHandler = event => {
    // console.log(event.target.files[0])
    this.setState({
      selectFile: event.target.files[0]
    })
  }

  fileUploadHander = async () => {
    const file = this.state.selectFile
    console.log('xxxxx', file, 'yyy')
    if (!file) return
    const formData = new FormData();
    await formData.append('file[new_image_path][]', file, file.name)
    console.log("formDatastart", formData, typeof formData, 'formDataend')

    for (var value of formData.values()) {
      console.log('111',value); 
   }
    try {
      let token = localStorage.getItem('resUserToken')
      let config = {
        method: 'POST',
        body: formData,
        headers: {
          // 'Content-Type': 'application/json',
          'Authorization': token,
          // 'Access-Control-Allow-Origin': 'http://localhost:3000',
          // 'Access-Control-Allow-Credentials': true,
          // 'Access-Control-Allow-Headers': '*'
        }
      }
      const uploadFile = await fetch(endpoint.files.uploadFiles, config)
      // uploadFile.header("Access-Control-Allow-Origin", "*")
      console.log("uploadFile", uploadFile, config, "uploadFile")
    } catch (err) {
      console.log('err', err)
      throw (err)
    }
    // ket qua postman
    // {
    //   "data": {
    //     "id": 9,
    //       "files": [
    //         {
    //           "static_url": "/root/real-estate",
    //           "imageUrl": "/uploads/tmp/photo/9/original-file_manager-Screenshot%20from%202018-11-10%2014-18-44.png.9.png",
    //           "imageThumb": "/uploads/tmp/photo/9/thumb-file_manager-Screenshot%20from%202018-11-10%2014-18-44.png.9.png",
    //           "id": "66867f51-77f1-45e9-8183-08c1dd62489b"
    //         }
    //       ]
    //   }
    // }

  }

  render() {

    return (
      <div>
        <input
          type='file'
          onChange={this.fileSelectedHandler}
          multiple
        />
        <button onClick={this.fileUploadHander} > Upload </button>

      </div>
    )
  }
}

export default Test