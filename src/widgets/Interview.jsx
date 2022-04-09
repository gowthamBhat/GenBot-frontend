import React from 'react'

function Interview() {
  return (
    <div>
      <input
        type="datetime-local"
        id="meeting-time"
        name="meeting-time"
        min={new Date().toISOString().split('T')[0]}
      />
      <button className="button">Submit</button>
    </div>
  )
}

export default Interview
