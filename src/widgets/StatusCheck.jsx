import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Moment from 'react-moment'
function StatusCheck(props) {
  const [status, setStatus] = useState([])
  useEffect(() => {
    checkStatus()
  }, [])
  const checkStatus = async () => {
    const user = localStorage.getItem('checkStatusCandidate')
    try {
      if (user) {
        let { data } = await axios.get(`http://localhost:8000/status/${user}`)
        if (data.length === 0) {
          props.actionProvider.simpleAlert('email is not registerd/invalid')
          return
        }

        setStatus(data)
        props.actionProvider.simpleAlert('Thank You')
      }
    } catch (error) {
      props.actionProvider.simpleAlert('email is not registerd/invalid')
    }
  }
  console.log(
    'email got from status',
    localStorage.getItem('checkStatusCandidate')
  )

  return (
    <div className="doc-status">
      {status.map((x, idx) => (
        <div key={idx}>
          <p>
            {' '}
            Date of Submit: {<Moment format="YYYY/MM/DD">{x.updatedAt}</Moment>}
          </p>
          <p>Designation: {x.designation}</p>{' '}
          <p>
            Status: {x.status === 'invited' ? 'Docs not uploaded' : x.status}
          </p>
        </div>
      ))}
    </div>
  )
}

export default StatusCheck
