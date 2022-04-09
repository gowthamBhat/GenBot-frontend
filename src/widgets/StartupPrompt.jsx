import React, { useState } from 'react'

function StartupPrompt(props) {
  const [disable, setDisabled] = useState(false)
  const btnStyle = {
    backgroundColor: '#FF555F'
  }
  const verificationHandler = () => {
    setDisabled(true)

    props.actionProvider.simpleAlert('Enter your email for verification')
  }
  const checkStatusHandler = () => {
    setDisabled(true)
    props.actionProvider.simpleAlert(
      'Enter your email address for status check'
    )
  }
  const scheduleInterview = () => {
    setDisabled(true)
    props.actionProvider.scheduleInterview()
  }

  return (
    <div className="prompt-container">
      <button
        disabled={disable}
        className="button"
        style={btnStyle}
        onClick={verificationHandler}
      >
        Doc Verification
      </button>
      <button
        disabled={disable}
        className="button"
        style={btnStyle}
        onClick={checkStatusHandler}
      >
        Check status
      </button>
      <button
        disabled={disable}
        className="button"
        style={btnStyle}
        onClick={scheduleInterview}
      >
        schedule interview
      </button>
    </div>
  )
}

export default StartupPrompt
