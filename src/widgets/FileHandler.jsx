import axios from 'axios'
import React, { useState } from 'react'
import './FileHandler.css'

function FileHandler(props) {
  const [file, fileState] = useState(null)
  const username = localStorage.getItem('botusername')
  const useremail = localStorage.getItem('botuseremail')

  let onFileChange = (event) => {
    fileState(event.target.files)
    // setState((state) => ({ ...state, files: event.target.files }))

    // props.actionProvider.allFileSelectedAlert(event.target.files.length)
  }
  const handleSubmit = () => {
    console.log('selected file', file)

    if (file) {
      saveFile(file)
      props.actionProvider.simpleAlert('files are uploading please wait')
    } else return
  }
  const saveFile = async (pdfFile) => {
    try {
      let fd = new FormData()
      fd.append('username', username)
      fd.append('email', useremail)

      for (let i = 0; i < pdfFile.length; i++) fd.append('pdfFile', pdfFile[i])

      console.log(fd, 'form data')

      const { data } = await axios.post('http://localhost:8000/mailroute', fd)
      if (data.akn) {
        props.actionProvider.simpleAlert('All files are uploaded')
      }
      console.log(data, 'res from backend')
    } catch (error) {
      if (error.response && error.response.status === 400) {
        props.actionProvider.simpleAlert(
          'Something went wrong, upload failed!!'
        )
        // toast.error('Email or Password is Wrong')
      }
    }
  }

  return (
    <div>
      <label htmlFor="infile" className="custom-file-upload">
        choose
      </label>
      <input
        type="file"
        name="pdfFile"
        id="infile"
        onChange={onFileChange}
        multiple
      />
      {/* <p style={{ color: 'red' }}>File Handler</p> */}
      <button className="button" onClick={handleSubmit}>
        upload
        {file && <span> {file.length} files</span>}
      </button>
    </div>
  )
}

export default FileHandler
