import React from 'react'

export default function CamisaLayout({children}) {
  return (
    <div>
        <p className="bg-red-300">Novas camisas de fio Egípicio</p>
        {children}
    </div>
  )
}
