import axios from 'axios'
import React, { useState } from 'react'
import './FileHandler.css'

function FileHandler(props) {
  const [file, fileState] = useState(null)

  const { setState } = props
  let onFileChange = (event) => {
    fileState(event.target.files)
    setState((state) => ({ ...state, files: event.target.files }))

    // props.actionProvider.allFileSelectedAlert(event.target.files.length)
  }
  const handleSubmit = () => {
    console.log('selected file', file)

    if (file) saveFile(file)
    else return
  }
  const saveFile = async (pdfFile) => {
    let fd = new FormData()
    for (let i = 0; i < pdfFile.length; i++) fd.append('pdfFile', pdfFile[i])

    console.log(fd, 'form data')

    const { data } = await axios.post('http://localhost:8000/mailroute', fd)
    if (data.akn) {
      props.actionProvider.allFilesUploadedAlert()
    }
    console.log(data, 'res from backend')
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
