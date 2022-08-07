import React, { useState } from 'react'
import { InfoContext } from "./info-context"

export const InfoProvider: React.FC = (props) => {
  const [message, setMessage] = useState("Next.js + TailwindCSS Skeleton");

  return (
    <InfoContext.Provider value={{
      message: message,
      setMessage: setMessage,
      }}>
        { props.children }
    </InfoContext.Provider>
  )
}
