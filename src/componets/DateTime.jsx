import React, { useState, useEffect } from 'react'

function DateTime() {
  const [dateTime, setDateTime] = useState('')

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date()
      const day = now.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase()
      const month = now.toLocaleDateString('en-US', { month: 'short' }).toUpperCase()
      let hours = now.getHours()
      const minutes = String(now.getMinutes()).padStart(2, '0')
      const ampm = hours >= 12 ? 'PM' : 'AM'
      hours = hours % 12
      hours = hours ? hours : 12
      const formattedHours = String(hours).padStart(2, '0')
      setDateTime(`${day} ${month} ${formattedHours}:${minutes} ${ampm}`)
    }

    updateDateTime()
    const interval = setInterval(updateDateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      {dateTime}
    </div>
  )
}

export default DateTime
